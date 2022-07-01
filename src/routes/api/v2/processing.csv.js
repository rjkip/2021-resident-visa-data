import { processing } from '$lib/data/processing';
import { formatIsoDate } from '$lib/formatting';

const formatted = processing.map((row) => ({
  ...row,
  processedBy: row.processedBy ? formatIsoDate(row.processedBy) : null,
}));

const headers = [
  ...Object.keys(formatted[0]),
  `Source: https://www.immigration.govt.nz/new-zealand-visas/waiting-for-a-visa/how-long-it-takes-to-process-your-visa-application/2021-resident-visa-processing-times`,
];

/** @type {import('./processing.csv.js').RequestHandler} */
export async function get() {
  return {
    body: [headers.join(','), ...formatted.map((it) => Object.values(it).join(',')), ''].join('\n'),
    headers: {
      'content-type': 'text/csv',
    },
  };
}
