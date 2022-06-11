<script>
  import LatestUpdate from '$lib/LatestUpdate.svelte';
  import DataSources from './DataSources.svelte';
</script>

<p>
  Regular updates on 2021 Resident Visa processing times. These are processed from the Immigration
  New Zealand website.
</p>
<p class=" notice">
  💁 This website makes no warranty, express or implied, nor assumes any legal liability or
  responsibility for the accuracy, correctness, completeness or use of any information that is
  available on or through this website.
</p>
<p>
  Immigration&rsquo;s latest update is from <strong><LatestUpdate /></strong>.
</p>
<DataSources />

<style>
  p {
    max-width: 45em;
  }
</style>
