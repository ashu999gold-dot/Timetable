/**
 * AI Study Time Optimizer
 * Analyzes timetable to suggest optimal study times, breaks, and focus blocks
 */

const StudyOptimizer = {
    /**
     * Analyze timetable and generate comprehensive recommendations
     */
    analyze(selectedCourses, timeSlots, days) {
        if (selectedCourses.size === 0) {
            return {
                hasSchedule: false,
                message: 'Add courses to get AI-powered study recommendations'
            };
        }

        const gaps = AIUtils.findGaps(selectedCourses, timeSlots, days);
        const workload = AIUtils.calculateWorkload(selectedCourses, days);
        const studyTimes = this.suggestStudyTimes(gaps, workload);
        const breakTimes = this.suggestBreakTimes(gaps);
        const focusTimes = this.findFocusBlocks(gaps);
        const insights = this.generateInsights(workload, gaps, days);

        return {
            hasSchedule: true,
            gaps,
            workload,
            studyTimes,
            breakTimes,
            focusTimes,
            insights,
            summary: this.generateSummary(workload, gaps, studyTimes, focusTimes)
        };
    },

    /**
     * Suggest optimal study times based on gaps
     */
    suggestStudyTimes(gaps, workload) {
        const suggestions = [];

        gaps.forEach(gap => {
            if (gap.duration >= 60) {
                const studyDuration = Math.min(gap.duration - 10, 120); // Max 2h study blocks
                const recommendation = {
                    day: gap.day,
                    start: gap.start,
                    end: AIUtils.addMinutes(gap.start, studyDuration),
                    duration: studyDuration,
                    reason: this.getStudyReason(gap, workload[gap.day]),
                    priority: this.getStudyPriority(gap, workload[gap.day]),
                    type: 'study'
                };
                suggestions.push(recommendation);
            }
        });

        // Sort by priority
        suggestions.sort((a, b) => b.priority - a.priority);

        return suggestions;
    },

    /**
     * Suggest break times
     */
    suggestBreakTimes(gaps) {
        const suggestions = [];

        gaps.forEach(gap => {
            if (gap.duration >= 10 && gap.duration < 60) {
                suggestions.push({
                    day: gap.day,
                    start: gap.start,
                    end: gap.end,
                    duration: gap.duration,
                    reason: gap.duration < 20 ? 'Quick refresh between classes' : 'Recharge and prepare for next class',
                    type: 'break'
                });
            }
        });

        return suggestions;
    },

    /**
     * Find long uninterrupted focus blocks (2+ hours)
     */
    findFocusBlocks(gaps) {
        return gaps
            .filter(gap => gap.duration >= 120)
            .map(gap => ({
                day: gap.day,
                start: gap.start,
                end: gap.end,
                duration: gap.duration,
                reason: 'Perfect for deep work on assignments or projects',
                priority: 'high',
                type: 'focus'
            }));
    },

    /**
     * Get study priority score (0-10)
     */
    getStudyPriority(gap, dayWorkload) {
        let priority = 5;

        // Longer gaps = higher priority
        if (gap.duration >= 120) priority += 2;
        else if (gap.duration >= 90) priority += 1;

        // Heavy workload days benefit more from study time
        if (dayWorkload.level === 'heavy' || dayWorkload.level === 'overload') {
            priority += 2;
        }

        // Morning study is generally more effective
        const timeOfDay = AIUtils.getTimeOfDay(gap.start);
        if (timeOfDay === 'morning') priority += 1;

        return Math.min(10, priority);
    },

    /**
     * Get reason for study recommendation
     */
    getStudyReason(gap, dayWorkload) {
        const timeOfDay = AIUtils.getTimeOfDay(gap.start);
        const reasons = [];

        if (gap.duration >= 120) {
            reasons.push('Long gap ideal for focused study');
        } else {
            reasons.push('Good time to review notes');
        }

        if (dayWorkload.level === 'heavy') {
            reasons.push('helps manage heavy workload');
        }

        if (timeOfDay === 'morning') {
            reasons.push('morning hours for peak productivity');
        }

        return reasons.join(', ');
    },

    /**
     * Generate insights about the schedule
     */
    generateInsights(workload, gaps, days) {
        const insights = [];

        // Weekly stats
        const totalHours = days.reduce((sum, day) => sum + parseFloat(workload[day].totalHours), 0);
        const totalClasses = days.reduce((sum, day) => sum + workload[day].classCount, 0);

        insights.push({
            icon: '📚',
            title: 'Weekly Workload',
            value: `${totalHours.toFixed(1)} hours`,
            detail: `${totalClasses} classes across ${days.length} days`,
            type: 'info'
        });

        // Busiest day
        const busiestDay = days.reduce((max, day) =>
            workload[day].totalMinutes > workload[max].totalMinutes ? day : max
        );
        insights.push({
            icon: '⚡',
            title: 'Busiest Day',
            value: busiestDay,
            detail: `${workload[busiestDay].totalHours}h of classes`,
            type: 'warning'
        });

        // Free time
        const totalFreeTime = gaps.reduce((sum, gap) => sum + gap.duration, 0);
        insights.push({
            icon: '🕐',
            title: 'Total Free Time',
            value: AIUtils.formatDuration(totalFreeTime),
            detail: `${gaps.length} gaps between classes`,
            type: 'success'
        });

        // Focus blocks
        const focusBlocks = gaps.filter(g => g.duration >= 120).length;
        if (focusBlocks > 0) {
            insights.push({
                icon: '🎯',
                title: 'Focus Blocks',
                value: focusBlocks,
                detail: '2+ hour blocks for deep work',
                type: 'success'
            });
        }

        // Workload warning
        const overloadDays = days.filter(day => workload[day].level === 'overload').length;
        if (overloadDays > 0) {
            insights.push({
                icon: '⚠️',
                title: 'Burnout Alert',
                value: `${overloadDays} day(s)`,
                detail: 'Consider reducing course load',
                type: 'danger'
            });
        }

        return insights;
    },

    /**
     * Generate summary text
     */
    generateSummary(workload, gaps, studyTimes, focusTimes) {
        const lines = [];

        const studyBlocks = studyTimes.length;
        const focusBlocks = focusTimes.length;

        if (studyBlocks > 0) {
            lines.push(`📖 ${studyBlocks} recommended study block${studyBlocks > 1 ? 's' : ''}`);
        }

        if (focusBlocks > 0) {
            lines.push(`🎯 ${focusBlocks} focus block${focusBlocks > 1 ? 's' : ''} for deep work`);
        }

        if (gaps.length === 0) {
            lines.push('⚡ Back-to-back classes - schedule breaks between days');
        }

        return lines.join(' • ');
    }
};

window.StudyOptimizer = StudyOptimizer;
