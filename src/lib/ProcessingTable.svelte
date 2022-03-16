<script>
  import { processing } from '$lib/data/processing';
  import ProcessingDataset from './ProcessingDataset.svelte';
  import { formatNum } from './formatting';

  function sumProps(prop, array) {
    return array.reduce((acc, obj) => acc + obj[prop], 0);
  }
</script>

<ProcessingDataset />

<table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Total applications received</th>
      <th>Total number of people included</th>
      <th>Applications approved and visas issued</th>
      <th>People approved and issued visas</th>
      <th>Applications declined (Failed criteria)</th>
    </tr>
  </thead>
  <tbody>
    {#each [...processing].reverse() as row}
      <tr>
        <td>{row.date}</td>
        <td>{formatNum(row.receivedApplications)}</td>
        <td>{formatNum(row.receivedPeople)}</td>
        <td>{formatNum(row.approvedApplications)}</td>
        <td>{formatNum(row.approvedPeople)}</td>
        <td>{formatNum(row.declinedApplications)}</td>
      </tr>
    {/each}
    <tr class="total">
      <th>Total</th>
      <td>{formatNum(sumProps('receivedApplications', processing))}</td>
      <td>{formatNum(sumProps('receivedPeople', processing))}</td>
      <td>{formatNum(sumProps('approvedApplications', processing))}</td>
      <td>{formatNum(sumProps('approvedPeople', processing))}</td>
      <td>{formatNum(sumProps('declinedApplications', processing))}</td>
    </tr>
  </tbody>
</table>

<style>
  th {
    padding: 0.5em;
  }

  th,
  td {
    text-align: center;
  }

  .total {
    font-weight: bold;
  }

  tr:nth-child(odd) {
    background: #efefef;
  }
</style>
