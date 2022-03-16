<script>
  import ProcessingTable from '$lib/ProcessingTable.svelte';
  import Charts from '$lib/Charts.svelte';
  import LatestUpdate from '$lib/LatestUpdate.svelte';
  import RemainingProcessedBy from '$lib/charts/RemainingProcessedBy.svelte';
</script>

<svelte:head>
  <title>2021 New Zealand Resident Visa data</title>
</svelte:head>

<nav>
  <ul>
    <li>📈 <a href="#charts">Charts</a></li>
    <li>🧮 <a href="#table">Table</a></li>
    <li>🧑‍💻 <a href="#apis">APIs</a></li>
  </ul>
</nav>

<hr />

<h1>🇳🇿 2021 New Zealand Resident Visa data</h1>

<p>
  Regular updates on 2021 Resident Visa processing times. These are processed manually from the
  Immigration New Zealand website.
</p>
<p class="notice">
  💁 This website makes no warranty, express or implied, nor assumes any legal liability or
  responsibility for the accuracy, correctness, completeness or use of any information that is
  available on or through this website.
</p>
<p>
  The latest update is from <strong><LatestUpdate /></strong>.
</p>
<p>
  <strong>Data source:</strong>
  📄
  <a
    href="https://www.immigration.govt.nz/documents/other-resources/2021-resident-visa-processing.pdf"
  >
    2021 Resident Visa processing updates (PDF)
  </a>
</p>
<hr />

<h2 id="charts">📈 Charts</h2>
<RemainingProcessedBy />
<Charts />
<hr />

<h2 id="table">🧮 Table</h2>
<ul>
  <li>📊 <a href="/api/v2/processing.csv">CSV</a> (<a href="/api/v1/processing.csv">v1</a>)</li>
  <li>👨 <a href="/api/v2/processing.json">JSON</a> (<a href="/api/v1/processing.json">v1</a>)</li>
</ul>
<ProcessingTable />
<hr />

<h2 id="apis">APIs</h2>
<p>Processing data per day in:</p>
<ul>
  <li>📊 <a href="/api/v2/processing.csv">CSV</a> (<a href="/api/v1/processing.csv">v1</a>)</li>
  <li>👨 <a href="/api/v2/processing.json">JSON</a> (<a href="/api/v1/processing.json">v1</a>)</li>
</ul>
<hr />

<p>
  <strong>Data source:</strong>
  📄
  <a
    href="https://www.immigration.govt.nz/documents/other-resources/2021-resident-visa-processing.pdf"
  >
    2021 Resident Visa processing updates (PDF)
  </a>
</p>
<hr />

<footer>
  <p>
    Open source 🐙&nbsp;<a href="https://github.com/rjkip/2021-resident-visa-data"
      >rjkip/2021-resident-visa-data</a
    >
  </p>
  <p>
    Created by 💼&nbsp;<a href="https://www.linkedin.com/in/rjkip/">in/rjkip</a>
  </p>
</footer>

<style>
  nav ul {
    padding: 0;
    list-style: none;
  }

  nav li {
    display: inline-block;
    margin: 0 0.5em;
  }

  p {
    max-width: 45em;
  }

  footer {
    text-align: center;
  }
  footer p {
    max-width: 100%;
  }
  footer a {
    font-weight: bold;
  }
</style>
