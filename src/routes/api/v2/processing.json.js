import { processing } from '$lib/data/processing';
import { formatIsoDate } from '$lib/formatting';

/** @type {import('./processing.csv.js').RequestHandler} */
export async function get(request) {
  return {
    body: {
      source:
        'https://www.immigration.govt.nz/new-zealand-visas/waiting-for-a-visa/visa-processing-updates/2021-resident-visa-processing-updates',
      sources: [
        'https://www.immigration.govt.nz/new-zealand-visas/waiting-for-a-visa/visa-processing-updates/2021-resident-visa-processing-updates',
      ],
      data: processing.map((row) => ({
        ...row,
        processedBy: row.processedBy ? formatIsoDate(row.processedBy) : null,
      })),
    },
    headers: {
      'content-type': 'application/json',
    },
  };
}
