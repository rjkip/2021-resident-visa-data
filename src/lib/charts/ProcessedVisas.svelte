<script>
  import Chart from 'svelte-frappe-charts';
  import Plot from './Plot.svelte';
  //https://www.npmjs.com/package/@observablehq/plot

  function parseUsDate(dateString) {
    return (([month, day, year, hours, minutes, seconds]) =>
      new Date(year, month - 1, day, hours || 0, minutes || 0, seconds || 0))(
      dateString.split(/[\/\s:]/),
    );
  }
  function plusDays(days, date) {
    const copy = new Date(date);
    copy.setDate(copy.getDate() + days);
    return copy;
  }

  const formData = `
Timestamp\tHas Immigration New Zealand approved or declined your 2021 Resident Visa application?\tWhen was your resident visa approved or declined?\tWhat was your visa expiry date at the time of your application?\tWhich processing stream did you apply under?\tOptional: When did you apply?
5/2/2022 18:22:04\tYes\t\t5/13/2022\tSettled\t3/3/2022
5/2/2022 21:28:07\tYes\t\t3/11/2022\tSettled\t5/1/2022
5/30/2022 11:20:39\tYes\t5/30/2022\t9/5/2022\tSkilled\t3/5/2022
6/28/2022 9:21:31\tYes\t6/17/2022\t10/21/2022\tSkilled\t3/3/2022
7/4/2022 22:23:57\tYes\t6/17/2022\t10/21/2022\tSettled\t1/2/2022
7/19/2022 14:42:34\tYes\t7/19/2022\t3/8/2024\tSettled\t5/12/2022
`
    .trim()
    .split('\n')
    .slice(1)
    .map((it) => it.trim().split('\t'))
    .map(([answeredOn, decided, decidedOn, expiresOn, stream, appliedOn]) => {
      return {
        answeredOn: parseUsDate(answeredOn),
        decided: decided === 'Yes',
        decidedOn: decidedOn || answeredOn ? parseUsDate(decidedOn || answeredOn) : null,
        expiresOn: parseUsDate(expiresOn),
        stream,
        appliedOn: appliedOn ? parseUsDate(appliedOn) : null,
      };
    })
    .filter((it) => it.decided && it.expiresOn && it.decidedOn);
</script>

<p class="warning">
  ⚠️ The information for the chart below is crowd-sourced and may not be accurate.<br />
  <a class="button approved" href="https://forms.gle/ajpv9927MdJ3wWWd6" target="_blank"
    >☑️ INZ processed my application</a
  >
</p>

<p class="chart-title">Resident visas processed by temporary visa expiry date</p>
<Plot
  fn={({ Plot, width }) =>
    Plot.plot({
      marginLeft: 60,
      inset: 5,
      nice: true,
      grid: true,
      width,
      height: 300,
      fontSize: 12,
      x: {
        label: 'Visa decided on →',
      },
      y: {
        label: '↑ Visa set to expire on',
      },
      marks: [
        Plot.dot(formData, {
          x: 'decidedOn',
          y: 'expiresOn',
          symbol: 'circle',
          fill: 'green',
          r: 5,
        }),
      ],
    })}
/>

<style>
  .chart-title {
    font-size: 12px;
    color: rgb(102, 102, 102);
    margin-left: 20px;
  }

  .warning {
    margin-top: 0;
    line-height: 2;
  }

  .button {
    background: #9f3d3d;
    cursor: default;

    border: 0;
    font-size: 1em;
    border-radius: 0.25rem;
    color: white;
    padding: 0.4em 0.5em;
    text-decoration: none;
  }
  .button[href] {
    background: #049b61;
    cursor: pointer;
  }
</style>
