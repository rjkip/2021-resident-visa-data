import { processing } from '$lib/data/processing';

const headers = `
Date
ReceivedApplications
ReceivedPeople
ApprovedApplications
ApprovedPeople
DeclinedApplications
Source: https://www.immigration.govt.nz/new-zealand-visas/waiting-for-a-visa/how-long-it-takes-to-process-your-visa-application/2021-resident-visa-processing-times
`
  .trim()
  .split('\n');

/** @type {import('./processing.csv.js').RequestHandler} */
export async function get(request) {
  return {
    body: [
      headers.join(','),
      ...processing.map(
        ({
          date,
          receivedApplications,
          receivedPeople,
          approvedApplications,
          approvedPeople,
          declinedApplications,
        }) =>
          Object.values({
            date,
            receivedApplications,
            receivedPeople,
            approvedApplications,
            approvedPeople,
            declinedApplications,
          }).join(','),
      ),
    ].join('\n'),
    headers: {
      'content-type': 'text/csv',
    },
  };
}
