/**
 * Analytics Module
 * Provides visual analytics and workload insights
 */

const Analytics = {
    /**
     * Generate complete analytics for the schedule
     */
    generate(selectedCourses, days) {
        if (selectedCourses.size === 0) {
            return {
                hasData: false
            };
        }

        const workload = AIUtils.calculateWorkload(selectedCourses, days);
        const balanceScore = AIUtils.calculateBalanceScore(workload, days);
        const distribution = this.getDistribution(workload, days);
        const recommendations = this.getRecommendations(workload, balanceScore, days);

        return {
            hasData: true,
            workload,
            balanceScore,
            distribution,
            recommendations,
            insights: this.getInsights(workload, balanceScore, days)
        };
    },

    /**
     * Get workload distribution for visualization
     */
    getDistribution(workload, days) {
        const maxHours = Math.max(...days.map(day => parseFloat(workload[day].totalHours)));

        return days.map(day => ({
            day,
            hours: parseFloat(workload[day].totalHours),
            classes: workload[day].classCount,
            level: workload[day].level,
            percentage: maxHours > 0 ? (parseFloat(workload[day].totalHours) / maxHours * 100) : 0,
            color: this.getLevelColor(workload[day].level)
        }));
    },

    /**
     * Get color for workload level
     */
    getLevelColor(level) {
        const colors = {
            'free': 'rgba(150, 150, 150, 0.3)',
            'light': 'rgba(78, 205, 196, 0.8)',
            'moderate': 'rgba(84, 160, 255, 0.8)',
            'heavy': 'rgba(255, 159, 67, 0.8)',
            'overload': 'rgba(255, 107, 107, 0.8)'
        };
        return colors[level] || colors.moderate;
    },

    /**
     * Get balance score color
     */
    getScoreColor(score) {
        if (score >= 80) return '#4ecdc4';
        if (score >= 60) return '#54a0ff';
        if (score >= 40) return '#ffa94d';
        return '#ff6b6b';
    },

    /**
     * Get balance score label
     */
    getScoreLabel(score) {
        if (score >= 80) return 'Excellent Balance';
        if (score >= 60) return 'Good Balance';
        if (score >= 40) return 'Fair Balance';
        return 'Needs Improvement';
    },

    /**
     * Generate recommendations based on analytics
     */
    getRecommendations(workload, balanceScore, days) {
        const recs = [];

        // Check for overload
        const overloadDays = days.filter(day => workload[day].level === 'overload');
        if (overloadDays.length > 0) {
            recs.push({
                icon: '⚠️',
                type: 'warning',
                title: 'Overloaded Schedule',
                message: `${overloadDays.join(', ')} ${overloadDays.length > 1 ? 'are' : 'is'} overloaded (6+ hours). Consider reducing courses to prevent burnout.`
            });
        }

        // Check for imbalance
        if (balanceScore < 60) {
            const lightDays = days.filter(day => workload[day].level === 'light' || workload[day].level === 'free');
            const heavyDays = days.filter(day => workload[day].level === 'heavy' || workload[day].level === 'overload');

            if (lightDays.length > 0 && heavyDays.length > 0) {
                recs.push({
                    icon: '⚖️',
                    type: 'info',
                    title: 'Unbalanced Distribution',
                    message: `Try to spread courses more evenly. ${heavyDays.join(', ')} ${heavyDays.length > 1 ? 'are' : 'is'} heavy while ${lightDays.join(', ')} ${lightDays.length > 1 ? 'are' : 'is'} light.`
                });
            }
        }

        // Check for free days
        const freeDays = days.filter(day => workload[day].level === 'free');
        if (freeDays.length > 0) {
            recs.push({
                icon: '🎉',
                type: 'success',
                title: 'Free Days Available',
                message: `${freeDays.join(', ')} ${freeDays.length > 1 ? 'are' : 'is'} completely free. Great for rest and personal projects!`
            });
        }

        // Excellent balance
        if (balanceScore >= 80) {
            recs.push({
                icon: '✨',
                type: 'success',
                title: 'Excellent Schedule',
                message: 'Your workload is well-balanced across the week. This promotes sustainable productivity!'
            });
        }

        // No recommendations
        if (recs.length === 0) {
            recs.push({
                icon: '👍',
                type: 'info',
                title: 'Good Schedule',
                message: 'Your schedule looks reasonable. Use the study optimizer for more insights.'
            });
        }

        return recs;
    },

    /**
     * Get quick insights
     */
    getInsights(workload, balanceScore, days) {
        const totalHours = days.reduce((sum, day) => sum + parseFloat(workload[day].totalHours), 0);
        const avgHours = totalHours / days.length;
        const busiestDay = days.reduce((max, day) =>
            workload[day].totalMinutes > workload[max].totalMinutes ? day : max
        );
        const lightestDay = days.reduce((min, day) =>
            workload[day].totalMinutes < workload[min].totalMinutes ? day : min
        );

        return {
            totalWeeklyHours: totalHours.toFixed(1),
            averageDailyHours: avgHours.toFixed(1),
            busiestDay: {
                day: busiestDay,
                hours: workload[busiestDay].totalHours
            },
            lightestDay: {
                day: lightestDay,
                hours: workload[lightestDay].totalHours
            },
            balanceScore,
            balanceLabel: this.getScoreLabel(balanceScore),
            scoreColor: this.getScoreColor(balanceScore)
        };
    }
};

window.Analytics = Analytics;
