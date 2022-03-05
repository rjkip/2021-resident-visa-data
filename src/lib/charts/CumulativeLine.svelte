<script>
  import { processing } from '$lib/data/processing';
  import Chart from 'svelte-frappe-charts';

  export let title, data;

  const chartData = {
    labels: processing.map((row) => row.date),
    datasets: Object.entries(data).map(([name, prop]) => ({
      name,
      values: cumulativeSumOf(prop, processing),
    })),
  };

  function cumulativeSumOf(prop, array) {
    return array.reduce((acc, row) => [...acc, (acc[acc.length - 1] || 0) + row[prop]], []);
  }
</script>

<Chart type="line" {title} data={chartData} />
