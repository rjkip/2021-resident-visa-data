<script>
  import { formatIsoDate } from '$lib/formatting';

  let applicationDate, processingDate, whatYearIsIt, phase1Eligible;

  $: mailParams =
    applicationDate &&
    processingDate &&
    new Date(applicationDate) >= new Date('2021-12-01') &&
    new Date(processingDate) >= new Date(applicationDate) &&
    ('' + whatYearIsIt).includes('2022') &&
    new URLSearchParams({
      subject: '2021 Resident Visa processing started',
      body: `
Application date: ${formatIsoDate(new Date(applicationDate))}
Phase 1 eligible: ${phase1Eligible ? 'Yes' : 'No'}
Processing date: ${formatIsoDate(new Date(processingDate))}`.trim(),
    });
  $: submitLink =
    mailParams &&
    `mailto:2021-resident-visa@reinier.nz?${mailParams.toString().replace(/\+/g, '%20')}`;

  function submitted() {
    if (submitLink && 'plausible' in window) {
      window.plausible('processing-details-mailto');
    }
  }
</script>

<form>
  <span>When did you apply?</span>
  <input type="date" bind:value={applicationDate} />
  <span>
    Were you eligible to apply under
    <a
      target="_blank"
      href="https://www.immigration.govt.nz/new-zealand-visas/already-have-a-visa/one-off-residence-visa/2021-resident-visa-application-process"
      >Phase 1</a
    >?
  </span>
  <label>
    <input type="checkbox" bind:checked={phase1Eligible} />
    Yes, phase 1
  </label>
  <span>When did Immigration New Zealand start processing your application?</span>
  <input type="date" bind:value={processingDate} />
  <span>Are you a human? What year is it?</span>
  <input type="text" bind:value={whatYearIsIt} />
  <p>
    <a
      class="button"
      href={submitLink || null}
      on:click={submitted}>Submit</a
    >
  </p>
</form>

<style>
  form {
    background: #d1e8dc;
    border-radius: 0.25rem;
    padding: 1em;
    margin: 1em;
    max-width: 45em;
  }
  span {
    display: block;
    line-height: 50px;
    font-weight: 600;
  }
  input {
    margin-bottom: 1em;
  }
  p {
    max-width: 45em;
  }
</style>
