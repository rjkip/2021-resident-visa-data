<script>
  export let up = false;
  export let down = false;
  export let good = 'up';

  $: symbol = up ? '▲' : down ? '▼' : null;
</script>

{#if symbol}
  <span
    class="trend"
    class:up
    class:down
    class:good={(up && good === 'up') || (down && good === 'down')}
    class:bad={(up && good === 'down') || (down && good === 'up')}>{symbol}</span
  >
{/if}

<style>
  .trend {
    font-size: 0.8em;
  }
  .up {
    vertical-align: top;
  }
  .down {
    vertical-align: bottom;
  }
  .good {
    color: green;
  }
  .bad {
    color: #c70000;
  }
</style>
