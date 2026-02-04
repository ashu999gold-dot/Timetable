document.addEventListener('DOMContentLoaded', () => {
    // State
    let courses = [];
    const colors = [
        'rgba(255, 107, 107, 0.6)',
        'rgba(78, 205, 196, 0.6)',
        'rgba(255, 230, 109, 0.6)',
        'rgba(26, 83, 92, 0.6)',
        'rgba(255, 159, 67, 0.6)',
        'rgba(84, 160, 255, 0.6)',
        'rgba(95, 39, 205, 0.6)',
        'rgba(200, 214, 229, 0.6)'
    ];

    // DOM Elements
    const form = document.getElementById('course-form');
    const slotsWrapper = document.getElementById('slots-wrapper');
    const addSlotBtn = document.getElementById('add-slot-btn');
    const timetableGrid = document.getElementById('timetable-grid');
    const clearAllBtn = document.getElementById('clear-all-btn');

    // Constants
    const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const START_HOUR = 8; // 8 AM
    const END_HOUR = 18; // 6 PM

    // Initialize Grid
    initGrid();

    // Event Listeners
    addSlotBtn.addEventListener('click', () => addSlotInput());

    // Search Functionality
    const searchInput = document.getElementById('course-search');
    const searchResults = document.getElementById('search-results');

    if (typeof SEMESTER_COURSES !== 'undefined' && searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (query.length < 2) {
                searchResults.classList.add('hidden');
                return;
            }

            const matched = SEMESTER_COURSES.filter(c =>
                c.name.toLowerCase().includes(query) ||
                c.code.toLowerCase().includes(query) ||
                c.instructor.toLowerCase().includes(query)
            ).slice(0, 10); // Limit to 10 results

            renderDropdown(matched);
        });

        // Hide dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                searchResults.classList.add('hidden');
            }
        });
    }

    function renderDropdown(courses) {
        searchResults.innerHTML = '';
        if (courses.length === 0) {
            searchResults.classList.add('hidden');
            return;
        }

        courses.forEach(c => {
            const div = document.createElement('div');
            div.className = 'dropdown-item';
            div.innerHTML = `<strong>${c.code}: ${c.name}</strong><span>${c.instructor}</span>`;
            div.addEventListener('click', () => selectCourse(c));
            searchResults.appendChild(div);
        });

        searchResults.classList.remove('hidden');
    }

    function selectCourse(course) {
        document.getElementById('courseName').value = course.name;
        document.getElementById('instructor').value = course.instructor;

        // Clear slots
        const existingSlots = document.querySelectorAll('.slot-row');
        // Remove all except first wrapper content or just clear all
        slotsWrapper.innerHTML = '';

        if (course.slots && course.slots.length > 0) {
            course.slots.forEach(slot => {
                addSlotInput(slot);
            });
        } else {
            addSlotInput();
        }

        searchResults.classList.add('hidden');
        searchInput.value = ''; // Clear search
    }

    // Delegate event for removing slots (since they are dynamic)
    slotsWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-slot-btn')) {
            if (slotsWrapper.children.length > 1) {
                e.target.closest('.slot-row').remove();
            } else {
                alert('You must have at least one time slot.');
            }
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addCourse();
    });

    clearAllBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear the entire timetable?')) {
            courses = [];
            renderTimetable();
        }
    });

    // Functions
    function initGrid() {
        timetableGrid.innerHTML = '';

        // Header Row (Corner + Days)
        const corner = document.createElement('div');
        corner.className = 'grid-header';
        corner.textContent = 'Time';
        timetableGrid.appendChild(corner);

        DAYS.forEach(day => {
            const dayHeader = document.createElement('div');
            dayHeader.className = 'grid-header';
            dayHeader.textContent = day;
            timetableGrid.appendChild(dayHeader);
        });

        // Time Rows
        for (let hour = START_HOUR; hour < END_HOUR; hour++) {
            // Time Label
            const timeLabel = document.createElement('div');
            timeLabel.className = 'time-label';
            timeLabel.textContent = `${formatTime(hour)} - ${formatTime(hour + 1)}`;
            timetableGrid.appendChild(timeLabel);

            // Day Cells for this hour
            DAYS.forEach(day => {
                const cell = document.createElement('div');
                cell.className = 'grid-cell';
                cell.dataset.day = day;
                cell.dataset.hour = hour;
                timetableGrid.appendChild(cell);
            });
        }
    }

    function addSlotInput(prefill = null) {
        const slotDiv = document.createElement('div');
        slotDiv.className = 'slot-row';

        const dayOptions = DAYS.map(day =>
            `<option value="${day}" ${prefill && prefill.day === day ? 'selected' : ''}>${day}</option>`
        ).join('');

        slotDiv.innerHTML = `
            <select class="day-select glass-input" required>
                ${dayOptions}
            </select>
            <input type="time" class="start-time glass-input" required value="${prefill ? prefill.start : ''}">
            <span>to</span>
            <input type="time" class="end-time glass-input" required value="${prefill ? prefill.end : ''}">
            <button type="button" class="remove-slot-btn" title="Remove slot">×</button>
        `;
        slotsWrapper.appendChild(slotDiv);
    }

    function addCourse() {
        const courseName = document.getElementById('courseName').value;
        const instructor = document.getElementById('instructor').value;

        // Collect Slots
        const slotRows = document.querySelectorAll('.slot-row');
        const slots = [];

        slotRows.forEach(row => {
            const day = row.querySelector('.day-select').value;
            const start = row.querySelector('.start-time').value;
            const end = row.querySelector('.end-time').value;

            if (start && end) {
                if (start >= end) {
                    alert('End time must be after start time.');
                    return; // Basic validation
                }
                slots.push({ day, start, end });
            }
        });

        if (slots.length === 0) return;

        const newCourse = {
            id: Date.now(),
            name: courseName,
            instructor: instructor,
            slots: slots,
            color: colors[courses.length % colors.length]
        };

        courses.push(newCourse);
        renderTimetable();
        form.reset();

        // Reset slots to just one
        slotsWrapper.innerHTML = '';
        addSlotInput();
    }

    function renderTimetable() {
        // Clear existing course cards only
        document.querySelectorAll('.course-card').forEach(card => card.remove());

        // Group cards by day and start time to find overlaps
        const placementMap = {}; // { 'Monday': [ { startVal, endVal, course, slot, ... } ] }

        DAYS.forEach(day => placementMap[day] = []);

        courses.forEach(course => {
            course.slots.forEach(slot => {
                const day = slot.day;
                if (!placementMap[day]) return;

                const startHour = parseInt(slot.start.split(':')[0]);
                const startMin = parseInt(slot.start.split(':')[1]);
                const endHour = parseInt(slot.end.split(':')[0]);
                const endMin = parseInt(slot.end.split(':')[1]);

                const startTotal = startHour * 60 + startMin;
                const endTotal = endHour * 60 + endMin;
                const duration = endTotal - startTotal;

                placementMap[day].push({
                    course,
                    slot,
                    startTotal,
                    endTotal,
                    duration,
                    startHour
                });
            });
        });

        // Loop through each day and process overlaps
        DAYS.forEach(day => {
            const dayEvents = placementMap[day];
            if (!dayEvents.length) return;

            // Sort by start time
            dayEvents.sort((a, b) => a.startTotal - b.startTotal);

            // Simple column packing algorithm
            const columns = []; // Array of arrays of events

            dayEvents.forEach(evt => {
                let placed = false;
                for (let i = 0; i < columns.length; i++) {
                    const col = columns[i];
                    const lastInCol = col[col.length - 1];
                    // If this event starts after the last one in this column ends, place it here
                    if (evt.startTotal >= lastInCol.endTotal) {
                        col.push(evt);
                        evt.colIndex = i;
                        placed = true;
                        break;
                    }
                }

                if (!placed) {
                    // Start a new column
                    columns.push([evt]);
                    evt.colIndex = columns.length - 1;
                }
            });

            // Calculate width for each event
            // Max columns needed at any point in time = width divisor
            // A more robust way: for each event, max overlaps = N. Width = 100/N%. Left = colIndex * Width.
            // Simplified: Just use total columns count for the day (might be too narrow if simple schedule)
            // Better: Overlap group detection. But let's stick to total columns for now as it's cleaner than just naive overlap.

            // Actually, let's just optimize: if I have 2 columns total, width is 50%.
            // But if column 2 is empty at time X, column 1 should ideally take 100%. 
            // The current simple packing approach creates "lanes". Lane 1, Lane 2.
            // If Coll 2 is empty later, Lane 1 stays 50%. This is acceptable for clarity.

            const totalLanes = columns.length;

            dayEvents.forEach(evt => {
                const cellSelector = `.grid-cell[data-day="${day}"][data-hour="${evt.startHour}"]`;
                const cell = document.querySelector(cellSelector);

                if (cell) {
                    const card = document.createElement('div');
                    card.className = 'course-card';
                    card.style.backgroundColor = evt.course.color;

                    // CONTENT: simplified
                    // Use acronym for long names if needed, but for now just name
                    // Add Venue if available
                    const venue = evt.slot.venue || 'TBA';

                    card.innerHTML = `
                        <div class="course-name" title="${evt.course.name}">${evt.course.name}</div>
                        <div class="course-venue">${venue}</div>
                    `;

                    // POSITIONING
                    const startMin = evt.startTotal % 60;
                    card.style.top = `${(startMin / 60) * 100}%`;

                    // Height calculation: (duration / 60) * 100% + overlaps
                    const hoursSpanned = evt.duration / 60;
                    card.style.height = `calc(${hoursSpanned * 100}% + ${(Math.floor(hoursSpanned)) * 8}px)`;

                    // WIDTH & LEFT (Lane logic)
                    if (totalLanes > 1) {
                        card.style.width = `calc((100% - 4px) / ${totalLanes})`; // 4px buffer
                        card.style.left = `calc(${(100 / totalLanes) * evt.colIndex}% + 2px)`;
                    } else {
                        card.style.width = 'calc(100% - 4px)';
                        card.style.left = '2px';
                    }

                    cell.appendChild(card);
                }
            });
        });
    }

    function formatTime(hour) {
        const suffix = hour >= 12 ? 'PM' : 'AM';
        const h = hour % 12 || 12;
        return `${h} ${suffix}`;
    }
});
