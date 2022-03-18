<script>
  import { processing } from '$lib/data/processing';
  import { formatLongDate, formatNum } from '../formatting';

  const lastDay = processing[processing.length - 1];
</script>

<p class="notice">
  ✅ Going by the last 14 days, most of the remaining
  <strong>{formatNum(lastDay.remainingApplications)}</strong>
  applications will be processed by
  <strong>{formatLongDate(lastDay.processedBy)}</strong>
  at a rate of
  <strong>{formatNum(lastDay.processedApplicationsMovAvg14)}</strong>
  applications per day.
</p>
