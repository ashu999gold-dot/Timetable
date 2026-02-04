import pandas as pd

try:
    file_path = "d:/calculator-website/timetable.xlsx"
    xl = pd.ExcelFile(file_path)
    with open("d:/calculator-website/excel_dump_slots.txt", "w", encoding="utf-8") as f:
        # Read 'Time Slots' sheet
        # Inspect sheet names again to be sure of exact spelling
        time_slot_sheet = [s for s in xl.sheet_names if 'Time Slots' in s][0]
        f.write(f"Reading sheet: {time_slot_sheet}\n")
        df = xl.parse(time_slot_sheet)
        f.write("\nColumns:\n" + str(df.columns.tolist()) + "\n")
        f.write("\nFirst 20 rows:\n")
        f.write(df.head(20).to_string())
except Exception as e:
    with open("d:/calculator-website/excel_dump.txt", "w") as f:
        f.write(f"Error: {e}")
