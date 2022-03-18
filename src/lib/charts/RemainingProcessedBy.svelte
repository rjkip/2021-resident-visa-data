<script>
  import { processing } from '$lib/data/processing';
  import { formatLongDate, formatNum } from '../formatting';
  import Trend from './Trend.svelte';

  const lastDay = processing[processing.length - 1];
  const fortnightAgo = processing[processing.length - 1 - 14];
  const processedByUp = lastDay.processedBy > fortnightAgo.processedBy;
  const processedByDown = lastDay.processedBy < fortnightAgo.processedBy;
  const processedApplicationsUp =
    lastDay.processedApplicationsMovAvg14 > fortnightAgo.processedApplicationsMovAvg14;
  const processedApplicationsDown =
    lastDay.processedApplicationsMovAvg14 < fortnightAgo.processedApplicationsMovAvg14;
</script>

<p class="notice">
  ✅ Going by the last 14 days, most of the remaining
  <strong>{formatNum(lastDay.remainingApplications)}</strong>
  applications will be processed by
  <strong>{formatLongDate(lastDay.processedBy)}</strong>&nbsp;<Trend
    up={processedByUp}
    down={processedByDown}
    good="down"
  />
  at a rate of
  <strong>{formatNum(lastDay.processedApplicationsMovAvg14)}</strong>&nbsp;<Trend
    up={processedApplicationsUp}
    down={processedApplicationsDown}
    good="up"
  />
  applications per day.
</p>
