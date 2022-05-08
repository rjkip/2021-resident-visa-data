<script>
  import Chart from 'svelte-frappe-charts';

  const chartData = {
    labels: ['Mar 2022', 'May 2022'],
    datasets: [
      {
        name: 'Resident visas processed by temporary visa expiry date',
        values: [1, 1],
      },
    ],
  };
</script>

<p class="warning">
  ⚠️ The information for the chart below is crowd-sourced and may not be accurate.
</p>

<Chart
  type="bar"
  title="Resident visas processed by temporary visa expiry date"
  data={chartData}
  colors={['green']}
/>

<style>
  .warning {
    margin-top: 0;
  }
</style>
