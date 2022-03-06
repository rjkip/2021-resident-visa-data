<script>
  import { processing } from '$lib/data/processing';
  import Chart from 'svelte-frappe-charts';

  const chartData = {
    labels: processing.map((row) => row.date),
    datasets: [
      {
        name: 'Processing rate',
        values: processing.map((row) => row.approvedApplications + row.declinedApplications),
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
