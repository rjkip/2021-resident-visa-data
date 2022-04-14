<script>
  import Chart from 'svelte-frappe-charts';
  import { formatIsoYearMonth, formatShortMonth } from '../formatting';

  const data = `
4/3/2022 20:55:39\tYes\t8/6/2022\t4/2/2022\tSettled\t3/3/2022
4/4/2022 2:03:05\tYes\t8/4/2022\t4/2/2022\tSettled\t3/5/2022
4/4/2022 12:39:09\tYes\t7/24/2022\t4/3/2022\tScarce\t3/1/2022
4/4/2022 17:18:08\tYes\t9/5/2022\t4/4/2022\tScarce\t3/5/2022
4/5/2022 10:52:19\tYes\t8/31/2022\t4/4/2022\tSettled\t4/4/2022
4/6/2022 21:35:13\tYes\t3/11/2022\t4/4/2022\tSettled\t3/1/2022
4/7/2022 7:47:34\tYes\t6/8/2023\t4/7/2022\tSkilled\t3/1/2022
4/8/2022 12:45:12\tYes\t9/19/2022\t4/4/2022\tSettled\t3/1/2022
4/11/2022 21:06:15\tYes\t1/31/0024\t4/11/2022\tSettled\t
4/13/2022 0:42:24\tYes\t8/11/2023\t4/11/2022\tSettled\t3/7/2022
4/14/2022 14:08:40\tYes\t8/14/2022\t4/4/2022\tSettled\t3/1/2022
`
    .trim()
    .split('\n')
    .map((line) => line.split('\t'))
    .map(([ts, confirm, visaExpiresAt, processedAt, stream, appliedAt]) => ({
      ts: new Date(ts),
      confirm,
      visaExpiresAt: new Date(visaExpiresAt),
      visaExpiresAtMonth: formatIsoYearMonth(new Date(visaExpiresAt)),
      processedAt: new Date(processedAt),
      stream,
      appliedAt: new Date(appliedAt),
    }))
    .sort((a, z) => a.visaExpiresAt - z.visaExpiresAt);
  const streams = [...new Set(data.map((it) => it.stream))];
  const months = [...new Set(data.map((it) => it.visaExpiresAtMonth))];
  const zeroedMonthGroups = Object.fromEntries(months.map((it) => [it, 0]));
  const zeroedStreamGroups = Object.fromEntries(streams.map((it) => [it, 0]));
  const byStream = data.reduce(
    (acc, it) => ({ ...acc, [it.stream]: [...(acc[it.stream] || []), it] }),
    zeroedStreamGroups,
  );
  const byMonthByStream = Object.entries(byStream).map(([stream, data]) => [
    stream,
    data.reduce(
      (acc, datum) => ({
        ...acc,
        [datum.visaExpiresAtMonth]: (acc[datum.visaExpiresAtMonth] || 0) + 1,
      }),
      zeroedMonthGroups,
    ),
  ]);

  const chartData = {
    labels: months.map((it) => formatShortMonth(new Date(it))),
    datasets: byMonthByStream.map(([stream, data]) => ({
      name: stream,
      values: Object.values(data),
    })),
  };
</script>

<p class="warning">
  ⚠️ <strong>This information is crowd-sourced and may not be accurate.</strong>
</p>
<Chart
  type="bar"
  title={'Asked for supporting documents, by visa expiry date and stream'}
  data={chartData}
  axisOptions={undefined && { xIsSeries: true, xAxisMode: 'tick' }}
  lineOptions={undefined && { hideDots: true, regionFill: true }}
  colors={['#648fff', '#dc267f', '#ffb000']}
/>
