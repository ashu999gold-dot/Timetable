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
        // Clear existing course cards only (not the grid structure)
        document.querySelectorAll('.course-card').forEach(card => card.remove());

        courses.forEach(course => {
            course.slots.forEach(slot => {
                const startHour = parseInt(slot.start.split(':')[0]);
                const startMin = parseInt(slot.start.split(':')[1]);
                const endHour = parseInt(slot.end.split(':')[0]);
                const endMin = parseInt(slot.end.split(':')[1]);

                // Calculate duration in minutes
                const startTotal = startHour * 60 + startMin;
                const endTotal = endHour * 60 + endMin;
                const duration = endTotal - startTotal;

                // Find content cell for start time
                // Note: We only support hour-based grid for simplicity in MVP, 
                // but we can position relatively within the cell.

                // Which grid cell does this start in?
                // Grid structure: 
                // Row 1: Headers
                // Row 2 (START_HOUR): TimeLabel, Mon, Tue, Wed, Thu, Fri
                // Row structure is linear in DOM, CSS Grid handles layout.

                // We need to find the specific cell element in the DOM
                const dayIndex = DAYS.indexOf(slot.day);
                if (dayIndex === -1) return;

                // Find the cell corresponding to the start hour and day.
                // Selector: .grid-cell[data-day="Monday"][data-hour="9"]
                const cell = document.querySelector(`.grid-cell[data-day="${slot.day}"][data-hour="${startHour}"]`);

                if (cell) {
                    const card = document.createElement('div');
                    card.className = 'course-card';
                    card.style.backgroundColor = course.color;
                    card.innerHTML = `
                        <div class="course-name">${course.name}</div>
                        <div class="course-info">${course.instructor}</div>
                        <div class="course-info">${slot.start} - ${slot.end}</div>
                    `;

                    // Positioning math
                    // Cell height is approx 60px (min-height) or determined by --slot-height if fixed.
                    // For now, let's assume standard height and use percentage top/height relative to the cell,
                    // allowing overflow if it spans multiple cells.

                    // Actually, simpler approach for MVP:
                    // Place it in the start cell, set height proportional to duration (1 hour = 100% of cell height?)
                    // If grid rows are fixed height, 60min = 100%. 

                    // Let's refine style.css to ensure cells have fixed height for accurate mapping?
                    // Currently .grid-cell has min-height: 60px.

                    // Let's force a height on grid cells in JS for calculation or rely on CSS variables.
                    // For a robust implementation, we place the card "absolute" within the cell.
                    // Top offset = (startMin / 60) * 100%
                    // Height = (duration / 60) * 100% + (borders/gaps if spanning)

                    card.style.top = `${(startMin / 60) * 100}%`;

                    // Calculate height carefully. 
                    // 1 hour cell = 100% height.
                    // Gap is 8px.
                    // If spans 2 hours, height = 200% + gap.

                    // Let's assume height percent = (duration/60) * 100 + (Math.floor(duration/60) * gap_percent_approx)
                    // Better: `calc( ${duration/60 * 100}% + ${(duration/60 - 1) * 8}px )` roughly.

                    const hoursSpanned = duration / 60;
                    card.style.height = `calc(${hoursSpanned * 100}% + ${(Math.floor(hoursSpanned)) * 8}px)`; // Adding gap adjustment

                    // Z-index handled by CSS hover

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
