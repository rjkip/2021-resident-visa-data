// Copy-paste from https://www.immigration.govt.nz/documents/other-resources/2021-resident-visa-processing.pdf
import { formatIsoDate } from '../formatting';
import { data } from './processing-data.js';

function localIsoDate(month, day) {
  // FIXME: Latent bug for December 2022
  const date = new Date(`${month} ${day}, ${month === 'Dec' ? 2021 : 2022}`);

  return formatIsoDate(date);
}

export const movAvgDays = 28;

export const processing = data
  .trim()
  .replace(/^\s*\w+, /gm, '')
  .replace(/,/g, '')
  .replace(/\./g, '0')
  .split('\n')
  .map((it) => it.trim().split(/\s+/))
  .map(
    ([
      month,
      day,
      receivedApplications,
      receivedPeople,
      approvedApplications,
      approvedPeople,
      declinedApplications,
    ]) => ({
      date: localIsoDate(month, day),
      receivedApplications: parseInt(receivedApplications, 10),
      receivedPeople: parseInt(receivedPeople, 10),
      approvedApplications: parseInt(approvedApplications, 10),
      approvedPeople: parseInt(approvedPeople, 10),
      declinedApplications: parseInt(declinedApplications, 10),
    }),
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
