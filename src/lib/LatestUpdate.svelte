<script>
  import { processing } from './data/processing';

  const dateTimeFormat = new Intl.DateTimeFormat(['en-NZ', 'en-UK', 'en'], { dateStyle: 'long' });
  const latestUpdate = new Date(processing[processing.length - 1].date);
</script>

{dateTimeFormat.format(latestUpdate)}
