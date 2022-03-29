<script>
  import { processing } from '$lib/data/processing';
  import Chart from 'svelte-frappe-charts';
  import { formatDateStringTooltipX } from './charts';

  export let title, data;

  const chartData = {
    labels: processing.map((row) => row.date),
    datasets: Object.entries(data).map(([name, prop]) => ({
      name,
      values: processing.map((row) => row[prop]),
    })),
  };
</script>

<Chart
  type="line"
  {title}
  data={chartData}
  axisOptions={{ xIsSeries: true, xAxisMode: 'tick' }}
  lineOptions={{ hideDots: true, regionFill: true }}
  tooltipOptions={{
    formatTooltipX: formatDateStringTooltipX,
  }}
/>
