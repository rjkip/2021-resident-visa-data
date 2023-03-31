import 'zx/globals';
import { formatIsoDate } from './src/lib/formatting.js';
import { data } from './src/lib/data/processing-weekly-2-totals-data.js';

const CLIENT = '2021-resident-visa-netlify-app';
const CLIENT_URL = 'https://2021-resident-visa.netlify.app/';
const USER_AGENT_HEADER = `User-Agent: ${CLIENT}/3 (${CLIENT_URL})`;

const url = `https://www.immigration.govt.nz/new-zealand-visas/waiting-for-a-visa/how-long-it-takes-to-process-your-visa-application/2021-resident-visa-processing-times`;
const html = (await $`curl -v ${url} -H ${USER_AGENT_HEADER}`).stdout;

const matches = html.match(
  /(?<=<td[^>]*?>)[\d,]+|(?<=Data valid (?:to|as of) approximately )\d+:\d+,\s[a-zA-Z\d\s]+/g,
);
const [
  receivedApplicationsCumulativeString,
  receivedPeopleCumulativeString,
  approvedApplicationsCumulativeString,
  approvedPeopleCumulativeString,
  declinedApplicationsCumulativeString,
  validAtString,
] = matches;
if (matches.length < 6) {
  console.error(`Not enough matches (${matches.length} instead of at least 6) in HTML`);
  console.error({
    receivedApplicationsCumulativeString,
    receivedPeopleCumulativeString,
    approvedApplicationsCumulativeString,
    approvedPeopleCumulativeString,
    declinedApplicationsCumulativeString,
    validAtString,
  });
  throw new Error(`Not enough matches (${matches.length} instead of at least 6) in HTML`);
}
const receivedApplicationsCumulative = parseInt(
  receivedApplicationsCumulativeString.replace(',', ''),
);
const receivedPeopleCumulative = parseInt(receivedPeopleCumulativeString.replace(',', ''));
const approvedApplicationsCumulative = parseInt(
  approvedApplicationsCumulativeString.replace(',', ''),
);
const approvedPeopleCumulative = parseInt(approvedPeopleCumulativeString.replace(',', ''));
const declinedApplicationsCumulative = parseInt(
  declinedApplicationsCumulativeString.replace(',', ''),
);
const dateString = validAtString.replace(/\s/g, ' ').replace(/^\d+:\d+, /, '');
const date = new Date(dateString);

const newWeeklyData = {
  ...data,
  [formatIsoDate(date)]: {
    date: formatIsoDate(date),
    receivedApplicationsCumulative,
    receivedPeopleCumulative,
    approvedApplicationsCumulative,
    approvedPeopleCumulative,
    declinedApplicationsCumulative,
  },
};
fs.writeFileSync(
  './src/lib/data/processing-weekly-2-totals-data.js',
  `export const data = ${JSON.stringify(newWeeklyData, null, 2)};\n`,
);
