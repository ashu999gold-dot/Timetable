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

    // AI Related Elements
    const voiceSearchBtn = document.getElementById('voice-search-btn');
    const filterChips = document.querySelectorAll('.filter-chip');
    const conflictPanel = document.getElementById('conflict-panel');
    const conflictList = document.getElementById('conflict-list');
    const aiRecommendations = document.getElementById('ai-recommendations');
    const recommendationList = document.getElementById('recommendation-list');
    const optimizeBtn = document.getElementById('optimize-btn');
    const aiInsightsPanel = document.getElementById('ai-insights-panel');
    const insightsContent = document.getElementById('insights-content');
    const closeInsightsBtn = document.getElementById('close-insights');
    const analyticsPanel = document.getElementById('analytics-panel');
    const analyticsContent = document.getElementById('analytics-content');
    const exportDropdownBtn = document.getElementById('export-dropdown-btn');
    const exportMenu = document.getElementById('export-menu');
    const exportOptions = document.querySelectorAll('.export-option');

    // --- Initialization ---
    initGrid();

    // --- Event Listeners ---

    // Course Search
    if (typeof SEMESTER_COURSES !== 'undefined' && searchInput) {
        let activeFilter = 'all';

        const performSearch = () => {
            const query = searchInput.value.toLowerCase().trim();
            if (query.length < 2 && activeFilter === 'all') {
                searchResults.classList.add('hidden');
                return;
            }

            let filtered = SEMESTER_COURSES;

            // Apply active time filter
            if (activeFilter !== 'all') {
                filtered = AIUtils.filterByTimePreference(filtered, activeFilter);
            }

            const matched = filtered.filter(c =>
                c.name.toLowerCase().includes(query) ||
                c.code.toLowerCase().includes(query) ||
                AIUtils.fuzzyMatch(c.name, query)
            ).slice(0, 15);

            renderDropdown(matched);
        };

        searchInput.addEventListener('input', performSearch);

        // Filter chips
        filterChips.forEach(chip => {
            chip.addEventListener('click', () => {
                filterChips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                activeFilter = chip.dataset.filter;
                performSearch();
            });
        });

        // Voice Search
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;

            voiceSearchBtn.addEventListener('click', () => {
                recognition.start();
                voiceSearchBtn.classList.add('recording');
            });

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                searchInput.value = transcript;
                voiceSearchBtn.classList.remove('recording');
                performSearch();
            };

            recognition.onerror = () => {
                voiceSearchBtn.classList.remove('recording');
            };

            recognition.onend = () => {
                voiceSearchBtn.classList.remove('recording');
            };
        } else {
            voiceSearchBtn.style.display = 'none';
        }

        // Close dropdown on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                searchResults.classList.add('hidden');
            }
            if (exportMenu && !e.target.closest('.export-controls')) {
                exportMenu.classList.add('hidden');
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

    // AI Insights
    optimizeBtn.addEventListener('click', () => {
        updateAIInsights();
        updateAnalytics();
        aiInsightsPanel.classList.toggle('hidden');
        analyticsPanel.classList.toggle('hidden');

        if (!aiInsightsPanel.classList.contains('hidden')) {
            aiInsightsPanel.scrollIntoView({ behavior: 'smooth' });
        }
    });

    closeInsightsBtn.addEventListener('click', () => {
        aiInsightsPanel.classList.add('hidden');
        analyticsPanel.classList.add('hidden');
    });

    // Smart Export Dropdown
    if (exportDropdownBtn) {
        exportDropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            exportMenu.classList.toggle('hidden');
        });
    }

    exportOptions.forEach(option => {
        option.addEventListener('click', () => {
            const action = option.dataset.action;
            exportMenu.classList.add('hidden');

            if (action === 'image') handleImageExport();
            if (action === 'calendar') handleCalendarExport();
            if (action === 'share') handleShareLink();
            if (action === 'qr') handleQRGen();
        });
    });

    function handleImageExport() {
        const btn = document.querySelector('.export-option[data-action="image"]');
        const oldText = btn.textContent;
        btn.textContent = '⏳ Processing...';

        // Visual feedback
        captureArea.style.padding = '30px';
        captureArea.style.background = 'linear-gradient(135deg, #24243e 0%, #0f0c29 100%)';
        captureArea.style.borderRadius = '20px';

        const allCards = document.querySelectorAll('.course-card');
        allCards.forEach(card => card.classList.add('export-mode'));

        setTimeout(() => {
            html2canvas(captureArea, {
                scale: 2,
                backgroundColor: '#0f0c29',
                useCORS: true
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = `timetable-${Date.now()}.png`;
                link.href = canvas.toDataURL('image/png');
                link.click();

                // Cleanup
                captureArea.style.padding = '';
                captureArea.style.background = '';
                captureArea.style.borderRadius = '';
                allCards.forEach(card => card.classList.remove('export-mode'));
                btn.textContent = oldText;
            });
        }, 100);
    }

    function handleCalendarExport() {
        const events = [];
        selectedCourses.forEach(course => {
            course.slots.forEach(slot => {
                events.push({
                    title: `${course.code}: ${course.name}`,
                    start: slot.start,
                    end: slot.end,
                    day: slot.day,
                    location: slot.venue || 'TBA'
                });
            });
        });

        // Simple ICS generation (very basic for demo)
        alert("Generating .ics file for " + events.length + " events...");
        // In a real app, use a library or more complex logic to generate RFC 5545
    }

    function handleShareLink() {
        const data = Array.from(selectedCourses.values()).map(c => c.code);
        const url = new URL(window.location);
        url.searchParams.set('courses', data.join(','));
        navigator.clipboard.writeText(url.href);
        alert('Share link copied to clipboard!');
    }

    function handleQRGen() {
        // Create modal for QR
        const modal = document.createElement('div');
        modal.className = 'glass-panel qr-modal';
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.zIndex = '10000';
        modal.style.padding = '40px';
        modal.style.textAlign = 'center';

        modal.innerHTML = `
            <h3>QR Code for Timetable</h3>
            <div id="qrcode" style="margin: 20px auto; display: inline-block; background: white; padding: 10px; border-radius: 10px;"></div>
            <p style="font-size: 0.8rem; margin-bottom: 20px;">Scan to view schedule on mobile</p>
            <button class="glass-button primary">Close</button>
        `;

        document.body.appendChild(modal);

        new QRCode(document.getElementById("qrcode"), {
            text: window.location.href,
            width: 200,
            height: 200
        });

        modal.querySelector('button').onclick = () => modal.remove();
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
            conflictPanel.classList.add('hidden');
            aiRecommendations.classList.add('hidden');
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

        // Trigger AI Updates
        updateConflicts();
        updateRecommendations();
        if (!aiInsightsPanel.classList.contains('hidden')) {
            updateAIInsights();
            updateAnalytics();
        }
    }

    function updateConflicts() {
        const conflicts = AIUtils.detectConflicts(selectedCourses);
        if (conflicts.length > 0) {
            conflictPanel.classList.remove('hidden');
            conflictList.innerHTML = '';
            conflicts.forEach(c => {
                const div = document.createElement('div');
                div.className = 'conflict-item';
                div.innerHTML = `🚨 <strong>${c.course1}</strong> overlaps with <strong>${c.course2}</strong> on ${c.day} (${c.time})`;
                conflictList.appendChild(div);
            });
        } else {
            conflictPanel.classList.add('hidden');
        }
    }

    function updateRecommendations() {
        if (selectedCourses.size === 0) return;

        const lastSelected = Array.from(selectedCourses.values()).pop();
        const suggestions = SEMESTER_COURSES.filter(c =>
            !selectedCourses.has(c.code) &&
            (c.code.substring(0, 3) === lastSelected.code.substring(0, 3))
        ).slice(0, 4);

        if (suggestions.length > 0) {
            aiRecommendations.classList.remove('hidden');
            recommendationList.innerHTML = '';
            suggestions.forEach(s => {
                const div = document.createElement('div');
                div.className = 'recommendation-card';
                div.innerHTML = `
                    <div class="code">${s.code}</div>
                    <div class="reason">Fits your major & schedule</div>
                `;
                div.addEventListener('click', () => addCourse(s));
                recommendationList.appendChild(div);
            });
        }
    }

    function updateAIInsights() {
        const analysis = StudyOptimizer.analyze(selectedCourses, TIME_SLOTS, DAYS);
        if (!analysis.hasSchedule) return;

        insightsContent.innerHTML = '';
        analysis.insights.forEach(insight => {
            const card = document.createElement('div');
            card.className = `insight-card ${insight.type}`;
            card.innerHTML = `
                <h4>${insight.icon} ${insight.title}</h4>
                <div class="value">${insight.value}</div>
                <div class="detail">${insight.detail}</div>
            `;
            insightsContent.appendChild(card);
        });

        // Add specific study recommendations
        if (analysis.studyTimes.length > 0) {
            const studyDiv = document.createElement('div');
            studyDiv.className = 'insight-card info';
            studyDiv.style.gridColumn = '1 / -1';
            studyDiv.innerHTML = `
                <h4>📖 Optimized Study Slots</h4>
                <ul style="padding-left: 20px; font-size: 0.85rem; margin-top: 10px;">
                    ${analysis.studyTimes.slice(0, 3).map(s => `<li><strong>${s.day} @ ${s.start}</strong>: ${s.reason}</li>`).join('')}
                </ul>
            `;
            insightsContent.appendChild(studyDiv);
        }
    }

    function updateAnalytics() {
        const data = Analytics.generate(selectedCourses, DAYS);
        if (!data.hasData) return;

        analyticsContent.innerHTML = `
            <div class="balance-card">
                <div class="score-circle" style="border-color: ${data.insights.scoreColor}">
                    <span class="score" style="color: ${data.insights.scoreColor}">${data.insights.balanceScore}</span>
                    <span style="font-size: 0.6rem; opacity: 0.6;">BALANCE</span>
                </div>
                <h3>${data.insights.balanceLabel}</h3>
                <p style="font-size: 0.8rem; opacity: 0.7; margin-top: 10px;">Weekly Class Time: ${data.insights.totalWeeklyHours}h</p>
            </div>
            <div class="glass-panel" style="padding: 20px;">
                <h4>Weekly Distribution</h4>
                <div class="workload-chart">
                    ${data.distribution.map(d => `
                        <div class="chart-bar-wrapper">
                            <div class="chart-bar" style="height: ${Math.max(d.percentage, 2)}%; background: ${d.color}" 
                                 title="${d.hours}h of classes">
                             </div>
                            <span class="chart-label">${d.day.substring(0, 3)}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="glass-panel" style="grid-column: 1 / -1; padding: 20px;">
                <h4>Burnout Risk Assessment</h4>
                <div style="margin-top: 15px;">
                    ${data.recommendations.map(r => `
                        <div style="display: flex; gap: 15px; margin-bottom: 12px; font-size: 0.85rem;">
                            <span>${r.icon}</span>
                            <div>
                                <strong style="display: block;">${r.title}</strong>
                                <span style="opacity: 0.7;">${r.message}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
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
