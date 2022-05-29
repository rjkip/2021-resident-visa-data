<script>
  import Chart from 'svelte-frappe-charts';

  const chartData = {
    labels: ['Mar 2022', 'May 2022', 'Sept 2022'],
    datasets: [
      {
        name: 'Resident visas processed by temporary visa expiry date',
        values: [1, 1, 1],
      },
    ],
  };
</script>

<p class="warning">
  ⚠️ The information for the chart below is crowd-sourced and may not be accurate.<br />
  <a class="button approved" href="https://forms.gle/ajpv9927MdJ3wWWd6" target="_blank"
    >☑️ INZ processed my application</a
  >
</p>

<Chart
  type="bar"
  title="Resident visas processed by temporary visa expiry date"
  data={chartData}
  colors={['green']}
/>

<style>
  .warning {
    margin-top: 0;
    line-height: 2;
  }

  .button {
    background: #9f3d3d;
    cursor: default;

    border: 0;
    font-size: 1em;
    border-radius: 0.25rem;
    color: white;
    padding: 0.4em 0.5em;
    text-decoration: none;
  }
  .button[href] {
    background: #049b61;
    cursor: pointer;
  }
</style>
