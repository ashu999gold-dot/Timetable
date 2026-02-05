/**
 * AI Utilities Module
 * Shared utility functions for AI-powered features
 */

const AIUtils = {
    /**
     * Compare two time strings in HH:MM format
     * @returns {number} Negative if t1 < t2, 0 if equal, positive if t1 > t2
     */
    compareTime(t1, t2) {
        const [h1, m1] = t1.split(':').map(Number);
        const [h2, m2] = t2.split(':').map(Number);
        return (h1 * 60 + m1) - (h2 * 60 + m2);
    },

    /**
     * Calculate duration between two times in minutes
     */
    getDuration(start, end) {
        const [h1, m1] = start.split(':').map(Number);
        const [h2, m2] = end.split(':').map(Number);
        return (h2 * 60 + m2) - (h1 * 60 + m1);
    },

    /**
     * Format minutes to readable duration (e.g., "2h 30m")
     */
    formatDuration(minutes) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        if (hours === 0) return `${mins}m`;
        if (mins === 0) return `${hours}h`;
        return `${hours}h ${mins}m`;
    },

    /**
     * Add minutes to a time string
     */
    addMinutes(time, minutes) {
        const [h, m] = time.split(':').map(Number);
        const totalMinutes = h * 60 + m + minutes;
        const newHours = Math.floor(totalMinutes / 60) % 24;
        const newMins = totalMinutes % 60;
        return `${String(newHours).padStart(2, '0')}:${String(newMins).padStart(2, '0')}`;
    },

    /**
     * Check if two time ranges overlap
     */
    timesOverlap(start1, end1, start2, end2) {
        return this.compareTime(start1, end2) < 0 && this.compareTime(start2, end1) < 0;
    },

    /**
     * Detect conflicts in course slots
     * @returns {Array} Array of conflict objects
     */
    detectConflicts(selectedCourses) {
        const conflicts = [];
        const courseArray = Array.from(selectedCourses.values());

        for (let i = 0; i < courseArray.length; i++) {
            for (let j = i + 1; j < courseArray.length; j++) {
                const course1 = courseArray[i];
                const course2 = courseArray[j];

                // Check each slot combination
                course1.slots.forEach(slot1 => {
                    course2.slots.forEach(slot2 => {
                        if (slot1.day === slot2.day &&
                            this.timesOverlap(slot1.start, slot1.end, slot2.start, slot2.end)) {
                            conflicts.push({
                                course1: course1.code,
                                course2: course2.code,
                                day: slot1.day,
                                time: `${slot1.start} - ${slot1.end}`,
                                slot1,
                                slot2
                            });
                        }
                    });
                });
            }
        }

        return conflicts;
    },

    /**
     * Find all free time gaps in the timetable
     * @returns {Array} Array of gap objects with day, start, end, duration
     */
    findGaps(selectedCourses, timeSlots, days) {
        const gaps = [];

        days.forEach(day => {
            const daySlots = [];

            // Collect all class times for this day
            selectedCourses.forEach(course => {
                course.slots.forEach(slot => {
                    if (slot.day === day) {
                        daySlots.push({
                            start: slot.start,
                            end: slot.end,
                            course: course.code
                        });
                    }
                });
            });

            // Sort by start time
            daySlots.sort((a, b) => this.compareTime(a.start, b.start));

            // Find gaps between classes
            for (let i = 0; i < daySlots.length - 1; i++) {
                const current = daySlots[i];
                const next = daySlots[i + 1];
                const gapDuration = this.getDuration(current.end, next.start);

                if (gapDuration > 0) {
                    gaps.push({
                        day,
                        start: current.end,
                        end: next.start,
                        duration: gapDuration,
                        type: this.categorizeGap(gapDuration),
                        beforeCourse: current.course,
                        afterCourse: next.course
                    });
                }
            }
        });

        return gaps;
    },

    /**
     * Categorize gap by duration
     */
    categorizeGap(minutes) {
        if (minutes < 20) return 'short-break';
        if (minutes < 60) return 'break';
        if (minutes < 120) return 'study-time';
        return 'long-study';
    },

    /**
     * Calculate daily workload distribution
     */
    calculateWorkload(selectedCourses, days) {
        const workload = {};

        days.forEach(day => {
            let totalMinutes = 0;
            let classCount = 0;

            selectedCourses.forEach(course => {
                course.slots.forEach(slot => {
                    if (slot.day === day) {
                        totalMinutes += this.getDuration(slot.start, slot.end);
                        classCount++;
                    }
                });
            });

            workload[day] = {
                totalMinutes,
                totalHours: (totalMinutes / 60).toFixed(1),
                classCount,
                level: this.getWorkloadLevel(totalMinutes)
            };
        });

        return workload;
    },

    /**
     * Get workload level (light, moderate, heavy, overload)
     */
    getWorkloadLevel(minutes) {
        if (minutes === 0) return 'free';
        if (minutes <= 120) return 'light';
        if (minutes <= 240) return 'moderate';
        if (minutes <= 360) return 'heavy';
        return 'overload';
    },

    /**
     * Calculate balance score (0-100)
     * Higher score = better balance
     */
    calculateBalanceScore(workload, days) {
        const values = days.map(day => workload[day].totalMinutes);
        const nonZeroValues = values.filter(v => v > 0);

        if (nonZeroValues.length === 0) return 0;

        // Calculate standard deviation
        const mean = nonZeroValues.reduce((a, b) => a + b, 0) / nonZeroValues.length;
        const variance = nonZeroValues.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / nonZeroValues.length;
        const stdDev = Math.sqrt(variance);

        // Convert to 0-100 score (lower stdDev = higher score)
        const maxStdDev = 120; // 2 hours difference is considered poor balance
        const score = Math.max(0, Math.min(100, 100 - (stdDev / maxStdDev * 100)));

        return Math.round(score);
    },

    /**
     * Get time of day category
     */
    getTimeOfDay(time) {
        const [hours] = time.split(':').map(Number);
        if (hours < 12) return 'morning';
        if (hours < 17) return 'afternoon';
        return 'evening';
    },

    /**
     * Filter courses by time preference
     */
    filterByTimePreference(courses, preference) {
        return courses.filter(course => {
            return course.slots.some(slot => {
                const timeOfDay = this.getTimeOfDay(slot.start);
                return timeOfDay === preference;
            });
        });
    },

    /**
     * Fuzzy search match
     */
    fuzzyMatch(text, query) {
        text = text.toLowerCase();
        query = query.toLowerCase();

        let queryIndex = 0;
        for (let i = 0; i < text.length && queryIndex < query.length; i++) {
            if (text[i] === query[queryIndex]) {
                queryIndex++;
            }
        }

        return queryIndex === query.length;
    },

    /**
     * Generate unique ID
     */
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    },

    /**
     * Save to localStorage with error handling
     */
    saveToStorage(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    },

    /**
     * Load from localStorage with error handling
     */
    loadFromStorage(key, defaultValue = null) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (e) {
            console.error('Storage error:', e);
            return defaultValue;
        }
    }
};

// Make it available globally
window.AIUtils = AIUtils;
