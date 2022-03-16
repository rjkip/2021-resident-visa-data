const locales = ['en-NZ', 'en-UK', 'en'];
const longDateTimeFormat = new Intl.DateTimeFormat(locales, {
  dateStyle: 'long',
  timeZone: 'Pacific/Auckland',
});
const shortDateTimeFormat = new Intl.DateTimeFormat(locales, {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  timeZone: 'Pacific/Auckland',
});
const numFormatter = new Intl.NumberFormat(locales);

export function formatLongDate(date) {
  return longDateTimeFormat.format(date);
}

/** NZ timezone 2000-01-01 */
export function formatIsoDate(date) {
  const parts = shortDateTimeFormat.formatToParts(date);
  const part = (type) => parts.filter((it) => it.type === type).map((it) => it.value)[0];
  return `${part('year')}-${part('month')}-${part('day')}`;
}

export function formatNum(num) {
  return numFormatter.format(num);
}
