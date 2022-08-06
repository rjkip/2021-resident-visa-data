import { data } from './processing-weekly-2-totals-data.js';

export const weeklyData2 = Object.values(data)
  .map((it) => ({ ...it, date: new Date(it.date) }))
  .sort((a, z) => a.date - z.date);
