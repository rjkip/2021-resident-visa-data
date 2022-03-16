<script>
  import { processing } from '$lib/data/processing';
  import Chart from 'svelte-frappe-charts';

  const processingRate = processing.map((it) => it.processedApplications);
  const movingAverage = processing.map((it) => it.processedApplicationsMovAvg14);

  const chartData = {
    labels: processing.map((row) => row.date),
    datasets: [
      {
        name: 'Processing rate',
        values: processingRate,
      },
      {
        name: `14-day moving average`,
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
/>
