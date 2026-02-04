import pandas as pd
import re
import json

EXCEL_PATH = "d:/calculator-website/timetable.xlsx"
OUTPUT_PATH = "d:/calculator-website/courses.js"

def parse_time_range(time_str):
    # Format: "8:30 – 9:50" or "10:00 - 11:20"
    # Normalize dash
    time_str = time_str.replace('–', '-').strip()
    parts = time_str.split('-')
    if len(parts) != 2:
        return None, None
    
    start = parts[0].strip()
    end = parts[1].strip()
    
    # Normalize to HH:MM format (add leading zero if needed)
    def normalize(t):
        if ':' not in t: return t
        h, m = t.split(':')
        return f"{int(h):02d}:{m}"
    
    return normalize(start), normalize(end)

def main():
    try:
        xl = pd.ExcelFile(EXCEL_PATH)
        
        # 1. Parse Slots
        slot_sheet_name = [s for s in xl.sheet_names if 'Time Slots' in s][0]
        df_slots = xl.parse(slot_sheet_name)
        
        slot_db = {}
        days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
        
        # Iterate rows (assuming standard structure based on dump)
        for idx, row in df_slots.iterrows():
            time_range = str(row.iloc[0])
            if pd.isna(time_range) or 'Lunch' in time_range:
                continue
                
            start, end = parse_time_range(time_range)
            if not start:
                continue
                
            # Columns 1 to 5 correspond to Mon-Fri
            for i, day in enumerate(days):
                code = row.iloc[i+1] # +1 because col 0 is time
                if pd.notna(code):
                    code = str(code).strip()
                    # Handle cases where multiple codes might exist or bad formatting?
                    # Assuming single code like "A1"
                    slot_db[code] = {'day': day, 'start': start, 'end': end}
        
        print(f"Loaded {len(slot_db)} slot codes.")

        # 2. Parse Courses
        course_sheet_name = xl.sheet_names[0] # Assuming first sheet is main
        df_courses = xl.parse(course_sheet_name)
        
        all_courses = []
        
        # Identify interesting columns
        # Based on dump: 'Course Number', 'Course Name', 'Name of the Instructors and Tutors'
        # 'Lecture', 'Tutorial', 'Lab'
        
        for idx, row in df_courses.iterrows():
            c_num = row.get('Course Number')
            c_name = row.get('Course Name')
            
            if pd.isna(c_num) or pd.isna(c_name):
                continue
                
            instructor = row.get('Name of the Instructors and Tutors', '')
            if pd.isna(instructor): instructor = "TBA"
            
            # Extract slots and venues
            slots = []
            
            # Helper to process column content
            def process_column(col_text, slot_db):
                found_slots = []
                if pd.isna(col_text): return found_slots
                col_text = str(col_text)
                
                # Extract venue: text within parentheses
                # Regex heuristic: look for (...) blocks
                venues = re.findall(r'\((.*?)\)', col_text)
                venue_text = ", ".join(venues) if venues else "TBA"
                
                # Clean up venue text (remove newlines)
                venue_text = venue_text.replace('\n', ' ').strip()
                
                # Find codes
                tokens = re.split(r'[,\s\n\(\)]+', col_text)
                for token in tokens:
                    token = token.strip()
                    if token in slot_db:
                        s = slot_db[token].copy() # Copy to avoid mutating shared dict
                        s['venue'] = venue_text
                        found_slots.append(s)
                return found_slots

            for col in ['Lecture', 'Tutorial', 'Lab']:
                slots.extend(process_column(row.get(col), slot_db))
            
            # Deduplicate slots (same day/time might appear multiple times if formats are weird)
            unique_slots = []
            seen_keys = set()
            for s in slots:
                key = f"{s['day']}-{s['start']}"
                if key not in seen_keys:
                    unique_slots.append(s)
                    seen_keys.add(key)
            
            if len(unique_slots) > 0:
                all_courses.append({
                    'code': str(c_num).strip(),
                    'name': str(c_name).strip(),
                    'instructor': str(instructor).strip(), # Kept in data but won't show in card
                    'slots': unique_slots
                })

        print(f"Extracted {len(all_courses)} courses.")
        
        # 3. Write JS file
        js_content = f"const SEMESTER_COURSES = {json.dumps(all_courses, indent=2)};"
        
        with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
            f.write(js_content)
            
        print(f"Successfully wrote to {OUTPUT_PATH}")

    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()
