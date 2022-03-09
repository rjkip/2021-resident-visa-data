<script>
  import { processing } from '$lib/data/processing';

  const applications = processing
    .map((row) => row.receivedApplications)
    .reduce((acc, n) => acc + n, 0);
  const approvedApplications = processing
    .map((row) => row.approvedApplications)
    .reduce((acc, n) => acc + n, 0);
  const declinedApplications = processing
    .map((row) => row.declinedApplications)
    .reduce((acc, n) => acc + n, 0);
  const processedApplications = approvedApplications + declinedApplications;
  const remainingApplications = applications - processedApplications;
  const processedPerDayLast14Days = (
    Array(14)
      .fill(0)
      .map((_, offset) => processing[processing.length - 1 - offset])
      .map((row) => row.approvedApplications + row.declinedApplications)
      .reduce((acc, n) => acc + n, 0) / 14
  ).toFixed();
  const remainingDays = remainingApplications / processedPerDayLast14Days;
  const date = new Date();
  date.setDate(date.getDate() + remainingDays);

  const formatNumber = (n) => new Intl.NumberFormat(['en-NZ', 'en-UK', 'en']).format(n);
  const formatDate = (date) =>
    new Intl.DateTimeFormat(['en-NZ', 'en-UK', 'en'], { dateStyle: 'long' }).format(date);
</script>

<p class="notice">
  ✅ Going by the last 14 days, all remaining
  <strong>{formatNumber(remainingApplications)}</strong> applications will be processed by
  <strong>{formatDate(date)}</strong>.
</p>
