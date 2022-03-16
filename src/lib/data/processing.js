// Copy-paste from https://www.immigration.govt.nz/documents/other-resources/2021-resident-visa-processing.pdf
let data = `
Wed, Dec 1 1,358 2,832 . . .
Thu, Dec 2 2,496 5,431 . . .
Fri, Dec 3 2,167 4,980 . . .
Sat, Dec 4 1,544 3,822 . . .
Sun, Dec 5 574 1,410 . . .
Mon, Dec 6 810 2,006 1 1 .
Tue, Dec 7 492 1,305 10 16 .
Wed, Dec 8 382 1,033 16 18 .
Thu, Dec 9 319 848 7 9 .
Fri, Dec 10 221 574 14 23 .
Sat, Dec 11 111 297 6 7 .
Sun, Dec 12 91 261 3 3 .
Mon, Dec 13 160 441 10 16 .
Tue, Dec 14 143 390 21 32 .
Wed, Dec 15 156 398 30 36 .
Thu, Dec 16 158 426 130 224 .
Fri, Dec 17 113 294 56 108 .
Sat, Dec 18 50 149 . . .
Sun, Dec 19 58 162 124 227 .
Mon, Dec 20 88 220 9 19 .
Tue, Dec 21 105 262 68 140 .
Wed, Dec 22 103 255 96 176 .
Thu, Dec 23 92 239 99 179 .
Fri, Dec 24 61 170 100 188 .
Sat, Dec 25 15 45 . . .
Sun, Dec 26 9 22 . . .
Mon, Dec 27 18 39 . . .
Tue, Dec 28 21 63 . . .
Wed, Dec 29 22 66 85 198 .
Thu, Dec 30 31 85 44 88 .
Fri, Dec 31 14 36 31 74 .
Sat, Jan 1 10 24 . . .
Sun, Jan 2 9 26 . . .
Mon, Jan 3 7 14 . . .
Tue, Jan 4 12 38 . . .
Wed, Jan 5 29 79 34 68 .
Thu, Jan 6 33 83 45 84 .
Fri, Jan 7 23 51 133 282 .
Sat, Jan 8 17 40 . . .
Sun, Jan 9 12 32 . . .
Mon, Jan 10 47 125 139 300 .
Tue, Jan 11 51 123 163 354 .
Wed, Jan 12 34 86 155 303 .
Thu, Jan 13 49 137 200 449 .
Fri, Jan 14 46 136 131 256 .
Sat, Jan 15 18 42 . . .
Sun, Jan 16 15 44 105 229 .
Mon, Jan 17 35 88 165 340 2
Tue, Jan 18 41 104 107 186 .
Wed, Jan 19 50 142 213 462 .
Thu, Jan 20 39 110 232 482 .
Fri, Jan 21 38 97 147 317 .
Sat, Jan 22 19 63 . . .
Sun, Jan 23 7 20 250 557 .
Mon, Jan 24 23 58 202 418 .
Tue, Jan 25 51 141 244 513 .
Wed, Jan 26 43 102 279 606 .
Thu, Jan 27 28 78 311 647 .
Fri, Jan 28 24 66 219 491 .
Sat, Jan 29 16 37 . . .
Sun, Jan 30 9 21 . . .
Mon, Jan 31 18 47 . . .
Tue, Feb 1 30 73 220 472 .
Wed, Feb 2 38 89 86 178 .
Thu, Feb 3 42 108 166 388 .
Fri, Feb 4 34 99 180 388 .
Sat, Feb 5 8 21 . . .
Sun, Feb 6 9 13 . . .
Mon, Feb 7 14 34 . . .
Tue, Feb 8 41 104 292 673 .
Wed, Feb 9 48 131 116 260 .
Thu, Feb 10 27 76 89 211 .
Fri, Feb 11 33 95 73 228 .
Sat, Feb 12 7 15 . . .
Sun, Feb 13 11 23 . . .
Mon, Feb 14 23 55 144 344 .
Tue, Feb 15 32 86 109 283 .
Wed, Feb 16 36 95 80 202 .
Thu, Feb 17 35 105 41 89 .
Fri, Feb 18 31 85 556 1,266 .
Sat, Feb 19 12 32 . . .
Sun, Feb 20 10 23 . . .
Mon, Feb 21 443 918 420 1,092 .
Tue, Feb 22 690 1,542 97 256 .
Wed, Feb 23 755 1,606 404 1,046 .
Thu, Feb 24 1,059 2,256 918 2,455 .
Fri, Feb 25 1,139 2,429 314 772 .
Sat, Feb 26 943 1,868 . . .
Sun, Feb 27 1,112 2,240 . . .
Sun, Mar 6 1,666 3,225 . . .
Sat, Mar 5 2,291 4,323 . . .
Fri, Mar 4 4,222 8,005 206 480 .
Thu, Mar 3 5,466 9,929 236 594 .
Wed, Mar 2 8,406 14,769 61 179 1
Tue, Mar 1 18,362 29,297 56 217 1
Mon, Feb 28 1,256 2,601 166 421 1
`;

function localIsoDate(month, day) {
  // FIXME: Latent bug for December 2022
  const date = new Date(`${month} ${day}, ${month === 'Dec' ? 2021 : 2022}`);
  const pad = (n) => (n >= 10 ? n : `0${n}`);

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export const processing = data
  .trim()
  .replace(/^\w+, /gm, '')
  .replace(/,/g, '')
  .replace(/\./g, '0')
  .split('\n')
  .map((it) => it.split(/\s+/))
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
    const processedApplicationsMovAvg14 = (
      (processedApplications +
        acc
          .slice(-13)
          .map((it) => it.processedApplications)
          .reduce((a, b) => a + b, 0)) /
      14
    ).toFixed(0);
    const remainingApplications = receivedApplicationsCumulative - processedApplicationsCumulative;
    const processedInDays =
      processedApplicationsMovAvg14 > 0
        ? Math.round(remainingApplications / processedApplicationsMovAvg14)
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
      processedApplicationsMovAvg14,
      remainingApplications,
      processedInDays,
      processedBy,
    };
    return [...acc, newValue];
  }, []);
