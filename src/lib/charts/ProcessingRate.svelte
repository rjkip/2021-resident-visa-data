<script>
  import { processing } from '$lib/data/processing';
  import Chart from 'svelte-frappe-charts';

  const processingRate = processing.map(
    (row) => row.approvedApplications + row.declinedApplications,
  );
  const movingAverageDays = 14;
  const movingAverage = processingRate.map((rate, index, array) => [
    (
      Array(movingAverageDays)
        .fill(0)
        .map((_, offset) => array[index - offset])
        .reduce((acc, n) => acc + n, 0) / movingAverageDays
    ).toFixed(),
  ]);

  const chartData = {
    labels: processing.map((row) => row.date),
    datasets: [
      {
        name: 'Processing rate',
        values: processingRate,
      },
      {
        name: `${movingAverageDays}-day moving average`,
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
