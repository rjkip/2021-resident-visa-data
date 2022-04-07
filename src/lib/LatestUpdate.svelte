<script>
  import { processing } from './data/processing';
  import { formatLongWeekdayDate } from './formatting';

  const latestUpdate = new Date(processing[processing.length - 1].date);
</script>

{formatLongWeekdayDate(latestUpdate)}
