import { weeklyData1 } from './processing-weekly-1-increments.js';
import { datesBetween, distributeIntoCumulativeDataRange } from '../dates.js';
import { processedPerDay } from './processed-perday.js';
import { weeklyData2 } from './processing-weekly-2-totals.js';

export const movAvgDays = 28;

const allDailyData = [...processedPerDay, ...weeklyData1, ...weeklyData2].sort(
  (a, z) => a.date - z.date,
);

export const processing = [...allDailyData]
  .sort((a, b) => (a.date > b.date ? 1 : -1))
  .reduce((acc, currentValue, currentIndex, array) => {
    if (acc.length === 0) {
      return [currentValue];
    }

    const previousValue = acc[acc.length - 1];
    if (!previousValue) {
      console.error({ acc, currentValue, currentIndex });
    }
    const interpolated = datesBetween(previousValue.date, currentValue.date).map((date) => ({
      ...previousValue,
      date,
    }));

    const diffValue = {
      receivedApplicationsCumulative:
        currentValue.receivedApplicationsCumulative - previousValue.receivedApplicationsCumulative,
      receivedPeopleCumulative:
        currentValue.receivedPeopleCumulative - previousValue.receivedPeopleCumulative,
      approvedApplicationsCumulative:
        currentValue.approvedApplicationsCumulative - previousValue.approvedApplicationsCumulative,
      approvedPeopleCumulative:
        currentValue.approvedPeopleCumulative - previousValue.approvedPeopleCumulative,
      declinedApplicationsCumulative:
        currentValue.declinedApplicationsCumulative - previousValue.declinedApplicationsCumulative,
    };

    distributeIntoCumulativeDataRange(diffValue, interpolated, 'receivedApplicationsCumulative');
    distributeIntoCumulativeDataRange(diffValue, interpolated, 'receivedPeopleCumulative');
    distributeIntoCumulativeDataRange(
      diffValue,
      interpolated,
      'approvedApplicationsCumulative',
      true,
    );
    distributeIntoCumulativeDataRange(diffValue, interpolated, 'approvedPeopleCumulative', true);
    distributeIntoCumulativeDataRange(
      diffValue,
      interpolated,
      'declinedApplicationsCumulative',
      true,
    );

    return [...acc, ...interpolated];
  }, [])
  .reduce((acc, currentValue, currentIndex, array) => {
    const previousValue = acc[acc.length - 1] || {};
    const receivedApplications =
      currentValue.receivedApplicationsCumulative -
      (previousValue.receivedApplicationsCumulative || 0);
    const receivedPeople =
      currentValue.receivedPeopleCumulative - (previousValue.receivedPeopleCumulative || 0);
    const approvedApplications =
      currentValue.approvedApplicationsCumulative -
      (previousValue.approvedApplicationsCumulative || 0);
    const approvedPeople =
      currentValue.approvedPeopleCumulative - (previousValue.approvedPeopleCumulative || 0);
    const declinedApplications =
      currentValue.declinedApplicationsCumulative -
      (previousValue.declinedApplicationsCumulative || 0);
    const processedApplications = approvedApplications + declinedApplications;
    const processedApplicationsCumulative =
      currentValue.approvedApplicationsCumulative + currentValue.declinedApplicationsCumulative;
    const processedApplicationsMovAvg = (
      (processedApplications +
        acc
          .slice(-movAvgDays + 1)
          .map((it) => it.processedApplications)
          .reduce((a, b) => a + b, 0)) /
      movAvgDays
    ).toFixed(0);
    const remainingApplications =
      currentValue.receivedApplicationsCumulative - processedApplicationsCumulative;
    const processedInDays =
      processedApplicationsMovAvg > 0
        ? Math.round(remainingApplications / processedApplicationsMovAvg)
        : null;
    const processedBy = processedInDays === null ? null : new Date(currentValue.date);
    if (processedBy) {
      processedBy.setDate(processedBy.getDate() + processedInDays);
    }
    const newValue = {
      ...currentValue,
      receivedApplications,
      receivedPeople,
      approvedApplications,
      approvedPeople,
      declinedApplications,
      processedApplications,
      processedApplicationsCumulative,
      processedApplicationsMovAvg,
      remainingApplications,
      processedInDays,
      processedBy,
    };
    return [...acc, newValue];
  }, []);
