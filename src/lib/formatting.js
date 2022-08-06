const locales = ['en-NZ', 'en-UK', 'en'];
const longDateTimeFormat = new Intl.DateTimeFormat(locales, {
  dateStyle: 'long',
  timeZone: 'Pacific/Auckland',
});
const longWeekdayDateFormat = new Intl.DateTimeFormat(locales, {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Pacific/Auckland',
});
const weekDayShortDateTimeFormat = new Intl.DateTimeFormat(locales, {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'Pacific/Auckland',
});
const shortDateTimeFormat = new Intl.DateTimeFormat(locales, {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  timeZone: 'Pacific/Auckland',
});
const numFormatter = new Intl.NumberFormat(locales);

/** NZ timezone 1 January 2022 */
export function formatLongDate(date) {
  return longDateTimeFormat.format(date);
}

/** NZ timezone Monday, 1 January 2022 */
export function formatLongWeekdayDate(date) {
  return longWeekdayDateFormat.format(date);
}

/** NZ timezone Sun, 1 Jan 2022 */
export function formatWeekdayShortDate(date) {
  return weekDayShortDateTimeFormat.format(date);
}

/** NZ timezone 2022-12-31 */
export function formatIsoDate(date) {
  const parts = shortDateTimeFormat.formatToParts(date);
  const part = (type) => parts.filter((it) => it.type === type).map((it) => it.value)[0];
  return `${part('year')}-${part('month')}-${part('day')}`;
}

export function formatNum(num) {
  return numFormatter.format(num);
}
