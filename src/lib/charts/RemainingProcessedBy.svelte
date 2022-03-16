<script>
  import { processing } from '$lib/data/processing';
  import { formatLongDate, formatNum } from '../formatting';
</script>

<p class="notice">
  ✅ Going by the last 14 days, most of the remaining
  <strong>{formatNum(processing[processing.length - 1].remainingApplications)}</strong>
  applications will be processed by
  <strong>{formatLongDate(processing[processing.length - 1].processedBy)}</strong>.
</p>
