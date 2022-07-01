import { data } from './processing-data';

function spreadProcessingToDayOffsetBy(offsetBy, processed) {
  if (offsetBy === -2) {
    // Fri
    return Math.floor(processed / 5) + (processed % 5);
  } else if (offsetBy < -2) {
    // Mon-Fri
    return Math.floor(processed / 5);
  } else {
    return 0;
  }
}

export const movAvgDays = 28;

export const processing = data
  .trim()
  .replace(/,/g, '')
  .replace(/\./g, '0')
  .split('\n')
  // chunk [1,2,3,4] => [[1,2],[3,4]]
  .flatMap((value, index, array) => (index % 6 === 0 ? [array.slice(index, index + 6)] : []))
  .map(
    ([
      dateString,
      receivedApplications,
      receivedPeople,
      approvedApplications,
      approvedPeople,
      declinedApplications,
    ]) => ({
      date: new Date(dateString),
      receivedApplications: parseInt(receivedApplications, 10),
      receivedPeople: parseInt(receivedPeople, 10),
      approvedApplications: parseInt(approvedApplications, 10),
      approvedPeople: parseInt(approvedPeople, 10),
      declinedApplications: parseInt(declinedApplications, 10),
    }),
  )
  // spread out processing over week days
  .flatMap(
    (
      {
        date,
        receivedApplications,
        receivedPeople,
        approvedApplications,
        approvedPeople,
        declinedApplications,
      },
      index,
      array,
    ) =>
      [0, -1, -2, -3, -4, -5, -6].map((dayOffset, index1, array1) => ({
        date: ((date) => {
          date.setDate(date.getDate() + dayOffset);
          return date;
        })(new Date(date)),
        receivedApplications: spreadProcessingToDayOffsetBy(dayOffset, receivedApplications),
        receivedPeople: spreadProcessingToDayOffsetBy(dayOffset, receivedPeople),
        approvedApplications: spreadProcessingToDayOffsetBy(dayOffset, approvedApplications),
        approvedPeople: spreadProcessingToDayOffsetBy(dayOffset, approvedPeople),
        declinedApplications: spreadProcessingToDayOffsetBy(dayOffset, declinedApplications),
      })),
  )
  .sort((a, b) => (a.date > b.date ? 1 : -1))
  .reduce((acc, currentValue, currentIndex, array) => {
    const previousValue = acc[acc.length - 1] || {};
    const receivedApplicationsCumulative =
      (previousValue.receivedApplicationsCumulative || 0) + currentValue.receivedApplications;
    const receivedPeopleCumulative =
      (previousValue.receivedPeopleCumulative || 0) + currentValue.receivedPeople;
    const approvedApplicationsCumulative =
      (previousValue.approvedApplicationsCumulative || 0) + currentValue.approvedApplications;
    const approvedPeopleCumulative =
      (previousValue.approvedPeopleCumulative || 0) + currentValue.approvedPeople;
    const declinedApplicationsCumulative =
      (previousValue.declinedApplicationsCumulative || 0) + currentValue.declinedApplications;
    const processedApplications =
      currentValue.approvedApplications + currentValue.declinedApplications;
    const processedApplicationsCumulative =
      (previousValue.processedApplicationsCumulative || 0) + processedApplications;
    const processedApplicationsMovAvg = (
      (processedApplications +
        acc
          .slice(-movAvgDays + 1)
          .map((it) => it.processedApplications)
          .reduce((a, b) => a + b, 0)) /
      movAvgDays
    ).toFixed(0);
    const remainingApplications = receivedApplicationsCumulative - processedApplicationsCumulative;
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
      receivedApplicationsCumulative,
      receivedPeopleCumulative,
      approvedApplicationsCumulative,
      approvedPeopleCumulative,
      declinedApplicationsCumulative,
      processedApplications,
      processedApplicationsCumulative,
      processedApplicationsMovAvg,
      remainingApplications,
      processedInDays,
      processedBy,
    };
    return [...acc, newValue];
  }, []);
