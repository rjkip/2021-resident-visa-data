<script>
  import { processing } from '$lib/data/processing';
  import Chart from 'svelte-frappe-charts';

  export let title, data;

  const chartData = {
    labels: processing.map((row) => row.date),
    datasets: Object.entries(data).map(([name, prop]) => ({
      name,
      values: propOf(prop, processing),
    })),
  };

  function propOf(prop, array) {
    return array.reduce((acc, row) => [...acc, row[prop]], []);
  }
</script>

<Chart type="line" {title} data={chartData} />
