export function plusDays(days, date) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

export function datesBetween(startExcl, endIncl) {
  if (startExcl >= endIncl) throw new Error(`Start after end`);

  const dates = [];
  while (true) {
    const next = plusDays(1, dates[dates.length - 1] || startExcl);
    if (next > endIncl) {
      break;
    }
    dates.push(next);
  }

  return dates;
}

export function isWeekend(date) {
  return [0, 6].includes(date.getDay());
}

export function isWeekDay(date) {
  return !isWeekend(date);
}

/**
 * From
 *     { myprop: 5 }
 * Into date range
 *     { date: date+0, myprop: 0 }
 *     { date: date+1, myprop: 0 }
 *     { date: date+2, myprop: 0 }
 * Results in
 *     { date: date+0, myprop: 2 } (∆ +2)
 *     { date: date+1, myprop: 4 } (∆ +2)
 *     { date: date+2, myprop: 5 } (∆ +1)
 *
 * @param weekDayRequired Skips distribution into weekends unless the distributions starts in the weekend
 */
export function distributeIntoCumulativeDataRange(from, interpolated, prop, weekDayRequired) {
  const rangeStartsInWeekend = isWeekend(interpolated[0].date);
  const weekendAllowed = !weekDayRequired;

  let dayOffset = 0;
  while (from[prop] > 0) {
    const distributingOnWeekDay = isWeekDay(interpolated[dayOffset].date);
    if (weekendAllowed || rangeStartsInWeekend || distributingOnWeekDay) {
      for (let i = dayOffset; i < interpolated.length; i++) {
        interpolated[i][prop] += 1;
      }
      from[prop] -= 1;
    }
    dayOffset = (dayOffset + 1) % interpolated.length;
  }
}
