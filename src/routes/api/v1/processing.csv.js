import { processing } from '../../../data/processing';

const headers = `
Date
ReceivedApplications
ReceivedPeople
ApprovedApplications
ApprovedPeople
DeclinedApplications
Source: https://www.immigration.govt.nz/documents/other-resources/2021-resident-visa-processing.pdf
`
  .trim()
  .split('\n');

/** @type {import('./processing.csv.js').RequestHandler} */
export async function get(request) {
  return {
    body: [headers.join(','), ...processing.map((it) => Object.values(it).join(','))].join('\n'),
    headers: {
      'content-type': 'text/csv',
    },
  };
}
