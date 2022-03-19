<script>
  import ProcessingDetailsForm from '$lib/ProcessingDetailsForm.svelte';
</script>

<svelte:head>
  <title>Share processing details &mdash; 2021 New Zealand Resident Visa data</title>
</svelte:head>

<nav>
  <ul>
    <li>↩️ <a href="/">Back home</a></li>
  </ul>
</nav>
<hr />

<h1>😊 Share processing details</h1>

<p>
  Has Immigration New Zealand started processing your <em>2021 Resident Visa</em> application? Please
  provide some details so a progress estimate can be provided for those that are still waiting.
</p>

<p class="privacy">No personal information will be used.</p>

<ProcessingDetailsForm />
<hr />

<nav>
  <ul>
    <li>↩️ <a href="/">Back home</a></li>
  </ul>
</nav>

<style>
  .privacy {
    font-style: italic;
  }
</style>
