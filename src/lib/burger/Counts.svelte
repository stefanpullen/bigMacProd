<script>
  import { dataset } from "../scripts/store.js";
  import * as d3 from "d3";

  export let margin;
  export let xScale;
  export let yScale;
  export let dataPlot;

  const maxPrice = d3.max(dataPlot, (d) => d.dollar_price);
</script>

<g class="counter">
  {#each dataPlot as d}
    <text
      id="counterRight"
      x={margin.left + xScale(maxPrice) + 7}
      y={yScale(d.name) + yScale.bandwidth() / 2}
    >
      ${d.dollar_price}
    </text>
    <text
      id="counterLeft"
      fill={d.name == "Average" ? "#27251f" : "white"}
      x={margin.left + 7}
      y={yScale(d.name) + yScale.bandwidth() / 2}
    >
      {d.name}
    </text>
  {/each}
</g>

<style>
  .counter {
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    dominant-baseline: middle;
    font-size: 1em;
    opacity: 0;
  }
  /* #counterLeft {
    text-anchor: start;
    fill: white;
  } */
  #counterRight {
    font-weight: bold;
    /* font-weight: 500; */

    text-anchor: start;
    fill: #27251f;
  }
</style>
