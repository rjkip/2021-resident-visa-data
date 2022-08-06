import { processedPerDay } from './processed-perday.js';

const data = `
3 July 2022
597
1,375
2,593
3,675
1
26 June 2022
478
1,084
1,987
2,776
1
19 June 2022
593
1,368
1,964
2,664
4
12 June 2022
598
1,380
1,219
1,669
1
5 June 2022
750
1,725
1,466
2,160
6
29 May 2022
621
1,438
535
1,276
8
`;

export const weeklyData1 = data
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
  .sort((a, b) => (a.date > b.date ? 1 : -1))
  .reduce((acc, currentValue, currentIndex, array) => {
    const previousValue =
      currentIndex === 0 ? processedPerDay[processedPerDay.length - 1] : acc[currentIndex - 1];

    const receivedApplicationsCumulative =
      previousValue.receivedApplicationsCumulative + currentValue.receivedApplications;
    const receivedPeopleCumulative =
      previousValue.receivedPeopleCumulative + currentValue.receivedPeople;
    const approvedApplicationsCumulative =
      previousValue.approvedApplicationsCumulative + currentValue.approvedApplications;
    const approvedPeopleCumulative =
      previousValue.approvedPeopleCumulative + currentValue.approvedPeople;
    const declinedApplicationsCumulative =
      previousValue.declinedApplicationsCumulative + currentValue.declinedApplications;
    return [
      ...acc,
      {
        date: currentValue.date,
        receivedApplicationsCumulative,
        receivedPeopleCumulative,
        approvedApplicationsCumulative,
        approvedPeopleCumulative,
        declinedApplicationsCumulative,
      },
    ];
  }, []);
