<script>
  import { processing } from '$lib/data/processing';
  import { formatLongDate, formatNum } from '../formatting';
  import Trend from '../Trend.svelte';
  import { movAvgDays } from '../data/processing';

  const lastDay = processing[processing.length - 1];
  const fortnightAgo = processing[processing.length - 1 - movAvgDays];
  const processedByUp = lastDay.processedBy > fortnightAgo.processedBy;
  const processedByDown = lastDay.processedBy < fortnightAgo.processedBy;
  const processedApplicationsUp =
    lastDay.processedApplicationsMovAvg > fortnightAgo.processedApplicationsMovAvg;
  const processedApplicationsDown =
    lastDay.processedApplicationsMovAvg < fortnightAgo.processedApplicationsMovAvg;

  $: description = [
    'Most of the remaining ',
    formatNum(lastDay.remainingApplications),
    ' applications will be processed by ',
    formatLongDate(lastDay.processedBy),
    ' at a rate of ',
    formatNum(lastDay.processedApplicationsMovAvg),
    ' applications per day.',
  ].join('');
</script>

<p class="notice">
  ✅ Going by the last {movAvgDays} days, most of the remaining
  <strong class="datum">{formatNum(lastDay.remainingApplications)}</strong>
  applications will be processed by
  <strong class="datum">{formatLongDate(lastDay.processedBy)}</strong>&nbsp;<Trend
    up={processedByUp}
    down={processedByDown}
    good="down"
  />
  at a rate of
  <strong class="datum">{formatNum(lastDay.processedApplicationsMovAvg)}</strong>&nbsp;<Trend
    up={processedApplicationsUp}
    down={processedApplicationsDown}
    good="up"
  />
  applications per day.
</p>

<svelte:head>
  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
</svelte:head>

<style>
  .datum {
    white-space: nowrap;
  }
</style>
