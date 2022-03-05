<script>
  import { processing } from '$lib/data/processing';

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
          <td>{value}</td>
        {/each}
      </tr>
    {/each}
    <tr>
      <th>Total</th>
      <td>{sumProps('receivedApplications', processing)}</td>
      <td>{sumProps('receivedPeople', processing)}</td>
      <td>{sumProps('approvedApplications', processing)}</td>
      <td>{sumProps('approvedPeople', processing)}</td>
      <td>{sumProps('declinedApplications', processing)}</td>
    </tr>
  </tbody>
</table>
