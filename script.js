document.addEventListener('DOMContentLoaded', () => {
    // --- State ---
    const selectedCourses = new Map(); // id (code) -> courseObj
    const colors = [
        'rgba(255, 107, 107, 0.8)',
        'rgba(78, 205, 196, 0.8)',
        'rgba(255, 230, 109, 0.8)',
        'rgba(255, 159, 67, 0.8)',
        'rgba(84, 160, 255, 0.8)',
        'rgba(95, 39, 205, 0.8)',
        'rgba(162, 155, 254, 0.8)',
        'rgba(250, 177, 160, 0.8)'
    ];

    // --- Configuration ---
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

    // --- DOM Elements ---
    const searchInput = document.getElementById('course-search');
    const searchResults = document.getElementById('search-results');
    const selectedList = document.getElementById('selected-list');
    const courseCount = document.getElementById('course-count');
    const generateBtn = document.getElementById('generate-btn');
    const clearAllBtn = document.getElementById('clear-all-btn');
    const downloadBtn = document.getElementById('download-btn');
    const timetableGrid = document.getElementById('timetable-grid');
    const captureArea = document.getElementById('capture-area');

    // --- Initialization ---
    initGrid();

    // --- Event Listeners ---

    // Course Search
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

        // Close dropdown on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                searchResults.classList.add('hidden');
            }
        });
    }

    // Generate Timetable
    generateBtn.addEventListener('click', () => {
        renderTimetable();
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

    // Download as Image
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            // Visual feedback
            downloadBtn.textContent = '⏳ Processing...';
            downloadBtn.disabled = true;

            // Apply temporary capture styles
            captureArea.style.padding = '30px';
            captureArea.style.background = '#1e1e2e';
            captureArea.style.borderRadius = '20px';

            // CRITICAL: Expand all cards to show full venue text for image
            const allCards = document.querySelectorAll('.course-card');
            allCards.forEach(card => {
                card.classList.add('export-mode');
                // Hide expand buttons in export
                const btn = card.querySelector('.expand-btn');
                if (btn) btn.style.display = 'none';
            });

            // Small delay to let DOM update
            setTimeout(() => {
                html2canvas(captureArea, {
                    scale: 3, // Very high quality
                    backgroundColor: '#1e1e2e',
                    useCORS: true,
                    logging: false
                }).then(canvas => {
                    const link = document.createElement('a');
                    link.download = `timetable-${new Date().getTime()}.png`;
                    link.href = canvas.toDataURL('image/png');
                    link.click();

                    // Reset styles
                    captureArea.style.padding = '';
                    captureArea.style.background = '';
                    captureArea.style.borderRadius = '';

                    // Remove export mode from all cards
                    allCards.forEach(card => {
                        card.classList.remove('export-mode');
                        const btn = card.querySelector('.expand-btn');
                        if (btn) btn.style.display = '';
                    });

                    downloadBtn.textContent = '📸 Save as Image';
                    downloadBtn.disabled = false;
                }).catch(err => {
                    console.error('Export failed:', err);
                    alert('Export failed. Please try again.');

                    // Reset on error too
                    captureArea.style.padding = '';
                    captureArea.style.background = '';
                    allCards.forEach(card => {
                        card.classList.remove('export-mode');
                        const btn = card.querySelector('.expand-btn');
                        if (btn) btn.style.display = '';
                    });

                    downloadBtn.textContent = '📸 Save as Image';
                    downloadBtn.disabled = false;
                });
            }, 100); // 100ms delay for DOM to settle
        });
    }

    // --- Core Functions ---

    function initGrid() {
        timetableGrid.innerHTML = '';

        // 1. Header Row
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

        // 2. Body Rows
        TIME_SLOTS.forEach((slot, rowIndex) => {
            // Time Label Cell
            const label = document.createElement('div');
            label.className = `time-label ${slot.isBreak ? 'break-label' : ''}`;
            label.textContent = slot.isBreak ? "Lunch" : slot.label.split(' ')[0]; // e.g. "8:30"
            timetableGrid.appendChild(label);

            if (slot.isBreak) {
                // Lunch spans all days
                const breakCell = document.createElement('div');
                breakCell.className = 'break-cell';
                breakCell.textContent = "LUNCH BREAK";
                breakCell.style.gridColumn = "2 / span 5";
                timetableGrid.appendChild(breakCell);
            } else {
                // Day Cells
                DAYS.forEach(day => {
                    const cell = document.createElement('div');
                    cell.className = 'grid-cell';
                    cell.dataset.day = day;
                    cell.dataset.slotIndex = rowIndex;
                    timetableGrid.appendChild(cell);
                });
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
        if (selectedCourses.has(course.code)) {
            alert(`${course.code} is already in your selection list.`);
            return;
        }
        const color = colors[selectedCourses.size % colors.length];
        selectedCourses.set(course.code, { ...course, color });
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
                <button class="remove-btn">×</button>
            `;
            item.querySelector('.remove-btn').addEventListener('click', () => removeCourse(key));
            selectedList.appendChild(item);
        });
    }

    function renderTimetable() {
        // Clear old cards
        document.querySelectorAll('.course-card').forEach(c => c.remove());

        // Group all course slots by day and slot index
        const slotMap = {}; // { 'Monday-0': [course event objects] }

        selectedCourses.forEach(course => {
            course.slots.forEach(slot => {
                // Find matching standard slot index
                const slotIndex = TIME_SLOTS.findIndex(ts =>
                    !ts.isBreak &&
                    compareTime(slot.start, ts.start) >= 0 &&
                    compareTime(slot.start, ts.end) < 0
                );

                if (slotIndex === -1) return;

                // Calculate span
                let spanCount = 1;
                for (let i = slotIndex + 1; i < TIME_SLOTS.length; i++) {
                    if (TIME_SLOTS[i].isBreak) continue;
                    if (compareTime(slot.end, TIME_SLOTS[i].start) > 0) spanCount++;
                    else break;
                }

                const key = `${slot.day}-${slotIndex}`;
                if (!slotMap[key]) slotMap[key] = [];
                slotMap[key].push({ course, slot, spanCount });
            });
        });

        // Render each slot group
        Object.keys(slotMap).forEach(key => {
            const events = slotMap[key];
            const [day, slotIndex] = key.split('-');
            const cell = document.querySelector(`.grid-cell[data-day="${day}"][data-slot-index="${slotIndex}"]`);

            if (!cell) return;

            // Determine width for each card
            const count = events.length;

            events.forEach((evt, index) => {
                const card = createCard(evt.course, evt.slot, evt.spanCount);

                // Position calculation
                if (count > 1) {
                    // Multiple cards in same slot - divide width
                    const widthPercent = 100 / count;
                    const leftPercent = widthPercent * index;

                    card.style.width = `calc(${widthPercent}% - 4px)`;
                    card.style.left = `calc(${leftPercent}% + 2px)`;
                } else {
                    // Single card - full width
                    card.style.width = 'calc(100% - 4px)';
                    card.style.left = '2px';
                }

                cell.appendChild(card);
            });
        });
    }

    function createCard(course, slot, spanCount) {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.style.backgroundColor = course.color;

        // Height calculation: (span * 100%) + (span-1 * gap)
        if (spanCount > 1) {
            card.style.height = `calc(${spanCount * 100}% + ${(spanCount - 1) * 8}px)`;
            card.style.zIndex = "10";
        }

        card.innerHTML = `
            <div class="course-name">${course.code}</div>
            <div class="course-venue">${slot.venue || 'TBA'}</div>
            <button class="expand-btn">▼</button>
        `;

        // Expand logic
        const expandBtn = card.querySelector('.expand-btn');
        expandBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            card.classList.toggle('expanded');
            expandBtn.textContent = card.classList.contains('expanded') ? '▲' : '▼';
        });

        return card;
    }

    // Helper: Compare "HH:MM"
    function compareTime(t1, t2) {
        const [h1, m1] = t1.split(':').map(Number);
        const [h2, m2] = t2.split(':').map(Number);
        return (h1 * 60 + m1) - (h2 * 60 + m2);
    }
});
