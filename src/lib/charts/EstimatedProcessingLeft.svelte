<script>
  import { processing } from '$lib/data/processing';
  import Chart from 'svelte-frappe-charts';
  import { formatLongDate } from '../formatting';

  const slice = processing.slice(31);
  const weeksProcessingLeft = slice
    .map(function (it) {
      const processedInWeeks = ((it.processedInDays || 0) / 7).toFixed(2);
      return {
        processedInWeeks: processedInWeeks,
        processedBy: it.processedBy,
        /**
         * Hack to show the value in the graph;
         * it is time for another charting lib.
         */
        toString() {
          return processedInWeeks;
        },
      };
    })
    .slice(0);
  const processedBy = formatLongDate(slice[slice.length - 1].processedBy);
  const weeksProcessingLeftCurrently = slice[slice.length - 1].processedInDays / 7;

  const chartData = {
    labels: slice.map((row) => row.date),
    datasets: [
      {
        name: `Estimated weeks of processing left`,
        values: weeksProcessingLeft,
      },
    ],
    yMarkers: [
      {
        label: processedBy,
        value: weeksProcessingLeftCurrently,
        options: { labelPos: 'right' },
      },
    ],
  };
</script>

<Chart
  type="line"
  title="Estimated weeks of processing left"
  data={chartData}
  colors={['green']}
  axisOptions={{ xIsSeries: true, xAxisMode: 'tick' }}
  lineOptions={{ hideDots: true, regionFill: true }}
  tooltipOptions={{
    formatTooltipX(date) {
      return `On ${formatLongDate(new Date(date))}`;
    },
    formatTooltipY(value) {
      return value === undefined
        ? ''
        : `${value.processedInWeeks} weeks, or by ${formatLongDate(value.processedBy)}`;
    },
  }}
/>
