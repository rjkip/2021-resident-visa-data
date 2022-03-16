<script>
  import { processing } from './data/processing';
  import { formatLongDate } from './formatting';

  const latestUpdate = new Date(processing[processing.length - 1].date);
</script>

{formatLongDate(latestUpdate)}
