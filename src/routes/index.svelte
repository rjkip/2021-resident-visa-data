<script>
  import ProcessingTable from '$lib/ProcessingTable.svelte';
  import CumulativeLine from '$lib/charts/CumulativeLine.svelte';
  import Line from '../lib/charts/Line.svelte';
</script>

<h1>2021 Resident Visa data</h1>

<h2>Graphs</h2>

<CumulativeLine
  title="Cumulative applications"
  data={{
    Applications: 'receivedApplications',
    Approved: 'approvedApplications',
    Declined: 'declinedApplications',
  }}
/>
<CumulativeLine
  title="Cumulative people"
  data={{
    People: 'receivedPeople',
    Approved: 'approvedPeople',
  }}
/>
<Line
  title="Applications"
  data={{
    Applications: 'receivedApplications',
    Approved: 'approvedApplications',
    Declined: 'declinedApplications',
  }}
/>
<Line
  title="People"
  data={{
    People: 'receivedPeople',
    Approved: 'approvedPeople',
  }}
/>

<h2>Downloads</h2>

<ul>
  <li><a href="/api/v1/processing.csv">🧮 CSV</a></li>
  <li><a href="/api/v1/processing.json">👨 JSON</a></li>
</ul>

<h2>Table</h2>

<ProcessingTable />
