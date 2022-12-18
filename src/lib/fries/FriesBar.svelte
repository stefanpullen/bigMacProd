<script>
  import { dataset } from "../scripts/store.js";
  import * as d3 from "d3";
  import binner from "../scripts/binner.js";
  import FriesBox from "./FriesBox.svelte";

  let svg;
  let width = 500;
  let height = 700;

  const margin = { top: 200, right: 50, bottom: 200, left: 50 };
  $: innerHeight = height - margin.top - margin.bottom;
  $: innerWidth = width - margin.left - margin.right;

  const inputRange = Array.from(
    new Set($dataset.map((d) => d.date.substring(0, 7)))
  ).reverse();

  let indexDate = inputRange.length - 1;
  $: date = inputRange[indexDate];

  $: data = $dataset
    // .filter((d) => d.date.substring(0, 4) >= '2020')
    .filter(
      (d) =>
        d.date.substring(0, 7) == inputRange[0] ||
        d.date.substring(0, 7) == inputRange[indexDate]
    );

  $: arr = data.map((d) => +d.dollar_price);
  $: arr1 = data
    .filter((d) => d.date.substring(0, 7) == inputRange[0])
    .map((d) => +d.dollar_price);
  $: arr2 = data
    .filter((d) => d.date.substring(0, 7) == inputRange[indexDate])
    .map((d) => +d.dollar_price);
  $: bins = binner(arr);
  $: bins1 = binner(arr1);
  $: bins2 = binner(arr2);

  $: xDomain = Array.from(new Set(bins.map((d) => +d.binNum)));
  $: yDomain = bins.map((d) => +d.count);

  $: xScale = d3
    .scaleBand()
    .domain(xDomain)
    .range([margin.left, innerWidth + margin.left])
    .padding(0.2);
  $: yScale = d3
    .scaleLinear()
    .domain([0, d3.max(yDomain)])
    .range([innerHeight, margin.top / 2])
    .nice();
</script>

<svg viewBox="0 0 {width} {height}" preserveAspectRatio="xMidYMin meet">
  <g class="chart" id="chart-2">
    {#each bins2 as d, i}
      <rect
        class="bars2"
        id="bar-{i}"
        y={yScale(d.count)}
        x={xScale(d.binNum)}
        width={xScale.bandwidth()}
        height={yScale(-20) - yScale(d.count)}
      />
    {/each}
  </g>
  <g class="chart" id="chart-1">
    {#each bins1 as d, i}
      <rect
        class="bars1"
        y={yScale(d.count)}
        x={xScale(d.binNum)}
        width={xScale.bandwidth()}
        height={yScale(-20) - yScale(d.count)}
      />
    {/each}
  </g>
  <use xlink:href="#bar-3" />
  <use xlink:href="#bar-9" />

  <FriesBox {margin} {height} {width} />

  <text class="year-labels" id="first-label" x={width / 2} y={innerHeight / 4}
    >2012</text
  >
  <text class="year-labels" id="last-label" x={width / 2} y={innerHeight / 3}
    >2022</text
  >
  <!-- 
      <rect x="0" y="0" {width} {height} stroke="#27251F" fill="None" />
      <rect
        x={margin.left}
        y={margin.top}
        width={innerWidth}
        height={innerHeight}
        stroke="#27251F"
        fill="None"
      /> -->
</svg>

<style>
  .bars1 {
    fill: #ffc72c;
    stroke: white;
    stroke-width: 2;
    rx: 2;
  }
  .bars2 {
    fill: #d7a829;
    stroke: white;
    stroke-width: 2;
    rx: 2;
  }

  .year-labels {
    font-family: "Permanent Marker", sans-serif;
    font-weight: bold;
    dominant-baseline: middle;
    font-size: 1.5em;
    opacity: 1;
    text-anchor: middle;
  }

  #first-label {
    fill: #ffc72c;
  }

  #last-label {
    fill: #d7a829;
  }
</style>
