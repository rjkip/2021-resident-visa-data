import { processing } from '$lib/data/processing';

/** @type {import('./processing.csv.js').RequestHandler} */
export async function get(request) {
  return {
    body: {
      source:
        'https://www.immigration.govt.nz/documents/other-resources/2021-resident-visa-processing.pdf',
      data: processing.map(
        ({
          date,
          receivedApplications,
          receivedPeople,
          approvedApplications,
          approvedPeople,
          declinedApplications,
        }) => ({
          date,
          receivedApplications,
          receivedPeople,
          approvedApplications,
          approvedPeople,
          declinedApplications,
        }),
      ),
    },
    headers: {
      'content-type': 'application/json',
    },
  };
}
