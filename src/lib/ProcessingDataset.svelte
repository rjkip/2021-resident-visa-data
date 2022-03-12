<script>
  import { page } from '$app/stores';

  $: organisation = {
    '@type': 'Organization',
    name: 'Immigration New Zealand',
  };
  $: dataset = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: '2021 New Zealand Resident Visa processing times',
    description:
      'Regular updates on 2021 New Zealand Resident Visa processing times. ' +
      'It is expected the majority of applications will be processed within 12 months, ' +
      'with most being processed much faster.',
    author: organisation,
    creator: organisation,
    distribution: [
      {
        '@type': 'DataDownload',
        contentUrl: $page.url.origin + '/api/v1/processing.json',
        encodingFormat: 'application/json',
      },
      {
        '@type': 'DataDownload',
        contentUrl: $page.url.origin + '/api/v1/processing.csv',
        encodingFormat: 'text/csv',
      },
    ],
    isAccessibleForFree: true,
    keywords: 'new zealand,resident visa,processing times',
  };
  $: jsonld = JSON.stringify(dataset, null, 2);
  $: jsonldScript = `<script type="application/ld+json">${jsonld.replace(
    `<${'/'}script>`,
    '',
  )}<${'/'}script>`;
</script>

{@html jsonldScript}
