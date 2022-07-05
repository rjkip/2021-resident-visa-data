<script>
  import { browser } from '$app/env';

  const neverResolves = new Promise(() => {});
  const Plot = browser ? import('@observablehq/plot') : neverResolves;
  const d3 = browser ? import('d3') : neverResolves;

  const imports = Promise.all([Plot, d3]);

  export let fn,
    responsive = true,
    width = null;

  async function appendPlot(node) {
    const plot = fn({ Plot: await Plot, d3: await d3, width: responsive ? width || null : null });
    // Don't scale down
    plot.style.minWidth = plot.getAttribute('width') + 'px';
    node.appendChild(plot);
  }

  function reportWidth(node) {
    if (!('ResizeObserver' in window)) {
      return;
    }

    let timer;
    const observer = new ResizeObserver((entries) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        width = entries[0].contentRect.width;
      }, 250);
    });
    observer.observe(node);
    return {
      destroy() {
        observer.disconnect();
      },
    };
  }
</script>

{#await imports then _}
  {#if browser}
    {#key [fn, responsive, width]}
      <div class="plot" use:reportWidth use:appendPlot {...$$restProps} />
    {/key}
  {/if}
{/await}

<style>
  .plot {
    /* Horizontally scroll plot SVG, as it doesn't scale down (see `appendPlot`) */
    overflow-x: auto;
  }
  .plot :global(svg) {
    background: inherit;
  }
</style>
