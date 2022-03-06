<script>
  import { processing } from '$lib/data/processing';
  import Chart from 'svelte-frappe-charts';

  const chartData = {
    labels: processing.map((row) => row.date),
    datasets: [
      {
        name: 'Processed percentage',
        values: processing
          .reduce(
            (acc, row) => [
              ...acc,
              {
                total: ((acc[acc.length - 1] || {}).total || 0) + row.receivedApplications,
                processed:
                  ((acc[acc.length - 1] || {}).processed || 0) +
                  row.approvedApplications +
                  row.declinedApplications,
              },
            ],
            [],
          )
          .map(({ total, processed }) => (processed / total) * 100),
      },
    ],
  };
</script>

<Chart
  type="line"
  title="Processed percentage (total of applications approved or declined)"
  data={chartData}
  axisOptions={{ xIsSeries: true, xAxisMode: 'tick' }}
  lineOptions={{ hideDots: true, regionFill: true }}
/>
