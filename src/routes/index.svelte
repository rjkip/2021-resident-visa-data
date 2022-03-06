<script>
  import ProcessingTable from '$lib/ProcessingTable.svelte';
  import Charts from '$lib/Charts.svelte';
  import LatestUpdate from '$lib/LatestUpdate.svelte';
</script>

<nav>
  <ul>
    <li>📡 <a href="#downloads">Downloads</a></li>
    <li>📈 <a href="#charts">Charts</a></li>
    <li>🧮 <a href="#table">Table</a></li>
  </ul>
</nav>

<hr />

<h1>2021 Resident Visa data</h1>

<p>
  Regular updates on 2021 Resident Visa processing times. These are processed manually from the
  Immigration New Zealand website.
</p>
<p class="notice">
  This website makes no warranty, express or implied, nor assumes any legal liability or
  responsibility for the accuracy, correctness, completeness or use of any information that is
  available on or through this web site.
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

<h2 id="downloads">📡 Downloads</h2>
<ul>
  <li>🧮 <a href="/api/v1/processing.csv">CSV</a></li>
  <li>👨 <a href="/api/v1/processing.json">JSON</a></li>
</ul>
<hr />

<h2 id="charts">📈 Charts</h2>
<Charts />
<hr />

<h2 id="table">🧮 Table</h2>
<ProcessingTable />
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
    Created by 💼&nbsp;<a href="https://www.linkedin.com/in/rjkip/" class="svelte-12dryyq"
      >in/rjkip</a
    >
    • 🐦&nbsp;<a href="https://twitter.com/rjkip" class="svelte-12dryyq">@rjkip</a>
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
