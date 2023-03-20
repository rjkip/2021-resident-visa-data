<script>
  import ProcessingTable from '$lib/ProcessingTable.svelte';
  import Charts from '$lib/Charts.svelte';
  import Intro from '$lib/Intro.svelte';
  import DataSources from '../lib/DataSources.svelte';
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

<div class="intro-section">
  <div class="intro">
    <h1>🇳🇿 2021 New Zealand Resident Visa data</h1>
    <Intro />
  </div>
</div>
<hr />

<Charts>
  <h2 slot="header" id="charts">📈 Charts</h2>
</Charts>
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

<DataSources />
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
  @media (min-width: 1200px) {
    .intro-section {
      display: flex;
      gap: 2em;
    }
    .progress-estimation {
      width: 40%;
    }
  }

  footer {
    text-align: center;
  }
  footer a {
    font-weight: bold;
  }
</style>
