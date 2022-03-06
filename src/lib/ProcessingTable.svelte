<script>
  import { processing } from '$lib/data/processing';

  const numFormatter = new Intl.NumberFormat();
  const numFormat = (n) => numFormatter.format(n);
  function sumProps(prop, array) {
    return array.reduce((acc, obj) => acc + obj[prop], 0);
  }
</script>

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
    {#each processing as row}
      <tr>
        {#each Object.values(row) as value}
          <td>{value === 0 ? '-' : typeof value === 'number' ? numFormat(value) : value}</td>
        {/each}
      </tr>
    {/each}
    <tr class="total">
      <th>Total</th>
      <td>{numFormat(sumProps('receivedApplications', processing))}</td>
      <td>{numFormat(sumProps('receivedPeople', processing))}</td>
      <td>{numFormat(sumProps('approvedApplications', processing))}</td>
      <td>{numFormat(sumProps('approvedPeople', processing))}</td>
      <td>{numFormat(sumProps('declinedApplications', processing))}</td>
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
