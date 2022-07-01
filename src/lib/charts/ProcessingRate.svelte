<script>
  import { processing } from '$lib/data/processing';
  import Chart from 'svelte-frappe-charts';
  import { formatDateStringTooltipX } from './charts';
  import { movAvgDays } from '../data/processing';

  const DAY_SAT = 6;
  const DAY_SUN = 0;
  const processingWeekdays = processing.filter(
    (row) => ![DAY_SAT, DAY_SUN].includes(new Date(row.date).getDay()),
  );

  const processingRate = processingWeekdays.map((it) => it.processedApplications);
  const movingAverage = processingWeekdays.map((it) => it.processedApplicationsMovAvg);

  const chartData = {
    labels: processingWeekdays.map((row) => row.date),
    datasets: [
      {
        name: 'Processing rate',
        values: processingRate,
      },
      {
        name: `${movAvgDays}-day moving average`,
        values: movingAverage,
      },
    ],
  };
</script>

<Chart
  type="line"
  title="Processing rate (applications approved or rejected per day)"
  data={chartData}
  axisOptions={{ xIsSeries: true, xAxisMode: 'tick' }}
  lineOptions={{ hideDots: true, regionFill: true }}
  tooltipOptions={{
    formatTooltipX: formatDateStringTooltipX,
  }}
/>
