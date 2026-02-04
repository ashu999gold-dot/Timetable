document.addEventListener('DOMContentLoaded', () => {
    // State
    const selectedCourses = new Map(); // Use Map to avoid duplicates easily: id -> courseObj
    // Colors from palette
    const colors = [
        'rgba(255, 107, 107, 0.7)',
        'rgba(78, 205, 196, 0.7)',
        'rgba(255, 230, 109, 0.7)',
        'rgba(26, 83, 92, 0.7)',
        'rgba(255, 159, 67, 0.7)',
        'rgba(84, 160, 255, 0.7)',
        'rgba(95, 39, 205, 0.7)',
        'rgba(200, 214, 229, 0.7)'
    ];

    // Standard Slots Configuration
    const TIME_SLOTS = [
        { label: '8:30 – 9:50', start: '08:30', end: '09:50' },
        { label: '10:00 – 11:20', start: '10:00', end: '11:20' },
        { label: '11:30 – 12:50', start: '11:30', end: '12:50' },
        { label: 'LUNCH BREAK (13:00 – 14:00)', start: '13:00', end: '14:00', isBreak: true },
        { label: '14:00 – 15:20', start: '14:00', end: '15:20' },
        { label: '15:30 – 16:50', start: '15:30', end: '16:50' },
        { label: '17:00 – 18:20', start: '17:00', end: '18:20' }
    ];

    const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    // DOM Elements
    const searchInput = document.getElementById('course-search');
    const searchResults = document.getElementById('search-results');
    const selectedList = document.getElementById('selected-list');
    const courseCount = document.getElementById('course-count');
    const generateBtn = document.getElementById('generate-btn');
    const clearAllBtn = document.getElementById('clear-all-btn');
    const timetableGrid = document.getElementById('timetable-grid');

    // --- Initialization ---
    initGrid();

    // --- Event Listeners ---

    // Search
    if (typeof SEMESTER_COURSES !== 'undefined' && searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (query.length < 2) {
                searchResults.classList.add('hidden');
                return;
            }

            const matched = SEMESTER_COURSES.filter(c =>
                c.name.toLowerCase().includes(query) ||
                c.code.toLowerCase().includes(query)
            ).slice(0, 10);

            renderDropdown(matched);
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                searchResults.classList.add('hidden');
            }
        });
    }

    // Generate Button
    generateBtn.addEventListener('click', () => {
        renderTimetable();
        // Scroll to timetable
        document.querySelector('.timetable-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Clear All
    clearAllBtn.addEventListener('click', () => {
        if (confirm('Clear all selected courses?')) {
            selectedCourses.clear();
            updateSelectedList();
            renderTimetable();
        }
    });

    // --- Functions ---

    function renderDropdown(courses) {
        searchResults.innerHTML = '';
        if (courses.length === 0) {
            searchResults.classList.add('hidden');
            return;
        }

        courses.forEach(c => {
            const div = document.createElement('div');
            div.className = 'dropdown-item';
            div.innerHTML = `<strong>${c.code}</strong><span>${c.name}</span>`;

            div.addEventListener('click', () => {
                addCourse(c);
                searchInput.value = '';
                searchResults.classList.add('hidden');
            });

            searchResults.appendChild(div);
        });

        searchResults.classList.remove('hidden');
    }

    function addCourse(course) {
        // Use composite key or code to prevent duplicates
        // Assuming 'code' is unique enough, or code+name
        const key = course.code;

        if (selectedCourses.has(key)) {
            // Highlighting effect to show it's already there?
            alert(`${course.code} is already selected.`);
            return;
        }

        // Assign color deterministically or randomly based on size
        const color = colors[selectedCourses.size % colors.length];

        selectedCourses.set(key, { ...course, color });
        updateSelectedList();
    }

    function removeCourse(key) {
        selectedCourses.delete(key);
        updateSelectedList();
    }

    function updateSelectedList() {
        selectedList.innerHTML = '';
        courseCount.textContent = `(${selectedCourses.size})`;

        if (selectedCourses.size === 0) {
            selectedList.innerHTML = '<p class="empty-state">No courses selected. Search above to add.</p>';
            return;
        }

        selectedCourses.forEach((course, key) => {
            const item = document.createElement('div');
            item.className = 'selected-item glass-panel';
            item.style.borderLeft = `4px solid ${course.color}`;

            item.innerHTML = `
                <div class="info">
                    <strong>${course.code}</strong>
                    <span>${course.name}</span>
                </div>
                <button class="remove-btn" title="Remove">×</button>
            `;

            item.querySelector('.remove-btn').addEventListener('click', () => removeCourse(key));
            selectedList.appendChild(item);
        });
    }

    function initGrid() {
        timetableGrid.innerHTML = '';

        // CSS Grid Template needs update? We can use explicit layout.
        // Let's create the DOM structure:
        // Header Row: [Corner] [Mon] [Tue] [Wed] [Thu] [Fri]
        // Rows: [Time Label] [Cell] [Cell] ...

        // 1. Header
        const corner = document.createElement('div');
        corner.className = 'grid-header corner';
        corner.textContent = 'Time';
        timetableGrid.appendChild(corner);

        DAYS.forEach(day => {
            const header = document.createElement('div');
            header.className = 'grid-header';
            header.textContent = day;
            timetableGrid.appendChild(header);
        });

        // 2. Rows
        TIME_SLOTS.forEach((slot, index) => {
            // Time Label
            const timeLabel = document.createElement('div');
            timeLabel.className = `time-label ${slot.isBreak ? 'break-label' : ''}`;
            timeLabel.textContent = slot.label.split('(')[0]; // Remove extra text if needed
            if (slot.isBreak) timeLabel.textContent = "Lunch";

            // Adjust row spanning if we want precise styling? 
            // We just use simple rows for now.
            timetableGrid.appendChild(timeLabel);

            if (slot.isBreak) {
                // Lunch Break Row - Span across all days? 
                // Or just 5 cells that are "break" cells
                const breakCell = document.createElement('div');
                breakCell.className = 'break-cell';
                breakCell.textContent = "LUNCH BREAK";
                breakCell.style.gridColumn = `2 / span 5`; // Span 5 columns (Mon-Fri)
                timetableGrid.appendChild(breakCell);
            } else {
                // Normal Cells
                DAYS.forEach(day => {
                    const cell = document.createElement('div');
                    cell.className = 'grid-cell';
                    cell.dataset.day = day;
                    cell.dataset.slotIndex = index; // Map to TIME_SLOTS index
                    timetableGrid.appendChild(cell);
                });
            }
        });
    }

    function renderTimetable() {
        // Clear old cards
        document.querySelectorAll('.course-card').forEach(c => c.remove());

        selectedCourses.forEach(course => {
            course.slots.forEach(slot => {
                // Determine which Time Slot row this belongs to.
                // We match primarily by Start Time.
                const slotIndex = TIME_SLOTS.findIndex(ts =>
                    compareTime(slot.start, ts.start) >= 0 &&
                    compareTime(slot.start, ts.end) < 0
                );

                if (slotIndex === -1) {
                    console.warn(`Could not place slot: ${slot.day} ${slot.start}`);
                    return;
                }

                // Check for spanning (e.g. Lab 14:00 - 16:50 spans multiple standard slots)
                // End time of course slot vs End time of Grid Slot
                let spanCount = 1;
                // Simple logic: if course end > current grid slot end, extend.

                // Find how many slots it covers
                for (let i = slotIndex + 1; i < TIME_SLOTS.length; i++) {
                    // If course end time is after the start of next slot, it likely spans into it.
                    // Especially if next slot is not a break (or even if it is?)
                    if (TIME_SLOTS[i].isBreak) continue; // Skip break? Or does lab continue through break? usually not.

                    if (compareTime(slot.end, TIME_SLOTS[i].start) > 0) {
                        spanCount++;
                    } else {
                        break;
                    }
                }

                const day = slot.day;
                const cell = document.querySelector(`.grid-cell[data-day="${day}"][data-slot-index="${slotIndex}"]`);

                if (cell) {
                    const card = document.createElement('div');
                    card.className = 'course-card';
                    card.style.backgroundColor = course.color;

                    // Height: 100% of cell * spanCount + gaps
                    if (spanCount > 1) {
                        // We need to account for the gap between rows
                        // calc(100% * span + (span-1) * gap)
                        // This assumes the card is in a container that allows overflow or we use z-index.
                        // Since grid cells are distinct, we might rely on absolute positioning and known row height?
                        // OR: z-index + absolute works if parent is relative.
                        // Standard cell height approx 80px?

                        // Let's use % height relative to cell. 
                        // Note: If cell height is auto, 200% might not work as intended if valid container isn't explicit.
                        // But let's try.
                        // We need to account for the grid gap (8px).

                        // Hack: 100% + 8px gap + 100% next row...
                        // Actually, simplified: just fit in the bucket. 
                        // If strict slots used, usually courses match slots exactly.
                        // Labs might differ.

                        card.style.height = `calc(${spanCount * 100}% + ${(spanCount - 1) * 8}px)`;
                        card.style.zIndex = 10;
                    } else {
                        card.style.height = '100%';
                    }

                    card.innerHTML = `
                        <div class="course-name">${course.code}</div>
                        <div class="course-venue">${slot.venue || ''}</div>
                    `;

                    cell.appendChild(card);
                }
            });
        });
    }

    // Helper: Compare "HH:MM"
    function compareTime(t1, t2) {
        const [h1, m1] = t1.split(':').map(Number);
        const [h2, m2] = t2.split(':').map(Number);
        return (h1 * 60 + m1) - (h2 * 60 + m2);
    }
});
