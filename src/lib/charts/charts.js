import { formatLongWeekdayDate } from '../formatting';

export function formatDateStringTooltipX(date) {
  return `On ${formatLongWeekdayDate(new Date(date))}`;
}
