<script>
  import CumulativeLine from '$lib/charts/CumulativeLine.svelte';
  import Line from '$lib/charts/Line.svelte';
  import ProcessingRate from '$lib/charts/ProcessingRate.svelte';
  import ProcessedPercentage from '$lib/charts/ProcessedPercentage.svelte';
  import { browser } from '$app/env';
  import EstimatedProcessingLeft from './charts/EstimatedProcessingLeft.svelte';
  import RemainingProcessedBy from './charts/RemainingProcessedBy.svelte';
  import PickedUpByVisaExpiry from './charts/PickedUpByVisaExpiry.svelte';
</script>

<slot name="header" />

{#if !browser}
  <p>Charts are only available when JavaScript is enabled.</p>
{:else}
  <div class="charts">
    <div style="grid-area: estimated-processing-left">
      <RemainingProcessedBy />
      <EstimatedProcessingLeft />
    </div>
    <div style="grid-area: picked-up;">
      <PickedUpByVisaExpiry />
    </div>
    <div style="grid-area: processing-rate">
      <ProcessingRate />
    </div>
    <div style="grid-area: processed-percentage">
      <ProcessedPercentage />
    </div>
    <div style="grid-area: cumulative-applications">
      <CumulativeLine
        title="Cumulative applications (total applications received)"
        data={{
          Applications: 'receivedApplications',
          Approved: 'approvedApplications',
          Declined: 'declinedApplications',
        }}
      />
    </div>
    <div style="grid-area: cumulative-people">
      <CumulativeLine
        title="Cumulative people (total people included in applications)"
        data={{
          People: 'receivedPeople',
          Approved: 'approvedPeople',
        }}
      />
    </div>
    <div style="grid-area: applications">
      <Line
        title="New applications"
        data={{
          Applications: 'receivedApplications',
          Approved: 'approvedApplications',
          Declined: 'declinedApplications',
        }}
      />
    </div>
    <div style="grid-area: people">
      <Line
        title="People included in new applications"
        data={{
          People: 'receivedPeople',
          Approved: 'approvedPeople',
        }}
      />
    </div>
  </div>
{/if}

<style>
  @media (min-width: 1200px) {
    .charts {
      display: grid;
      grid-template:
        'estimated-processing-left picked-up' auto
        'processing-rate processed-percentage' auto
        'cumulative-applications applications' auto
        'cumulative-people people' auto / 50% 50%;
      gap: 1em;
    }
    .charts > div {
      align-self: end;
    }
  }
</style>
