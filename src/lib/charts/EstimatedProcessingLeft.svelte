<script>
  import { processing } from '$lib/data/processing';
  import Chart from 'svelte-frappe-charts';
  import { formatLongDate } from '../formatting';
  import { formatDateStringTooltipX } from './charts';
  import RemainingProcessedBy from './RemainingProcessedBy.svelte';

  const weeksProcessingLeft = processing.map((it) => {
    const processedInWeeks = Math.ceil((it.processedInDays || 0) / 7);
    return {
      processedInWeeks: processedInWeeks,
      processedBy: it.processedBy,
      /**
       * Hack to show the value in the graph;
       * it is time for another charting lib.
       */
      toString() {
        return Math.min(200, this.processedInWeeks);
      },
    };
  });
  const processedBy = formatLongDate(processing[processing.length - 1].processedBy);
  const weeksProcessingLeftCurrently = Math.ceil(
    processing[processing.length - 1].processedInDays / 7,
  );

  const chartData = {
    labels: processing.map((row) => row.date),
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

<RemainingProcessedBy />

<Chart
  type="line"
  title="Estimated weeks of processing left"
  data={chartData}
  colors={['green']}
  axisOptions={{ xIsSeries: true, xAxisMode: 'tick' }}
  lineOptions={{ hideDots: true, regionFill: true }}
  tooltipOptions={{
    formatTooltipX: formatDateStringTooltipX,
    formatTooltipY(value) {
      return value === undefined
        ? ''
        : `${value.processedInWeeks} weeks, or by ${formatLongDate(value.processedBy)}`;
    },
  }}
/>
