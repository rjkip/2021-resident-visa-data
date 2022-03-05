<script>
  import { processing } from '../data/processing';

  function sumProps(array, prop) {
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
      <td>{sumProps(processing, 'receivedApplications')}</td>
      <td>{sumProps(processing, 'receivedPeople')}</td>
      <td>{sumProps(processing, 'approvedApplications')}</td>
      <td>{sumProps(processing, 'approvedPeople')}</td>
      <td>{sumProps(processing, 'declinedApplications')}</td>
    </tr>
  </tbody>
</table>
