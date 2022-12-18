<script>
  import { dataset, countrySet, meanDataset } from "../scripts/store.js";
  import { count } from "../scripts/animations.js";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import Cup from "./Cup.svelte";

  import * as d3 from "d3";
  import CupLegend from "./CupLegend.svelte";

  let data;
  let meanData;
  let countryData;

  let svg;
  let width = 500;
  let height = 700;

  const margin = { top: 150, right: 75, bottom: 50, left: 75 };
  $: innerHeight = height - margin.top - margin.bottom;
  $: innerWidth = width - margin.left - margin.right;

  data = $dataset.map((d) => {
    let obj = {};
    obj.name = d.name;
    obj.date = d.date;
    obj.dollar_price = +d.dollar_price;
    return obj;
  });
  meanData = $meanDataset;

  $: country = $countrySet[$count];

  $: xDomain = data.map((d) => new Date(d.date));
  $: yDomain = data.map((d) => +d.dollar_price);

  $: xScale = d3
    .scaleTime()
    .domain(d3.extent(xDomain))
    .range([margin.left, innerWidth + margin.left]);
  // .nice();

  $: yScale = d3
    .scaleLinear()
    .domain([0, d3.max(yDomain)])
    .range([innerHeight + margin.top, margin.top])
    .nice();

  $: path = d3
    .line()
    .curve(d3.curveLinear)
    .x((d) => xScale(new Date(d.date)))
    .y((d) => yScale(d.dollar_price))(meanData);

  let path2;
  let area2;
  let minX, maxX;

  $: if (country) {
    countryData = data.filter((d) => d.name == country);
    minX = countryData[0].date;
    maxX = countryData[countryData.length - 1].date;

    path2 = d3
      .line()
      .curve(d3.curveLinear)
      .x((d) => xScale(new Date(d.date)))
      .y((d) => yScale(d.dollar_price))(countryData);
    area2 = `${path2}L${xScale(new Date(maxX))},${yScale(0)}L${xScale(
      new Date(minX)
    )},${yScale(0)}z`;
  }
</script>

<svg viewBox="0 0 {width} {height}" preserveAspectRatio="xMidYMin meet">
  <g id="cup-and-chart">
    <g>
      <path class="path-m" d={path} />
      {#if country}
        <path class="path-area" d={area2} />
        <path class="path" d={path2} />
      {/if}
      {#each $dataset as d, index}
        <circle
          class="bubble"
          cx={xScale(new Date(d.date))}
          cy={yScale(d.dollar_price)}
          r="2"
          fill="none"
          stroke={d.dollar_price >
          countryData.filter((b) => b.date == d.date).map((c) => c.dollar_price)
            ? "#3c3024"
            : "#b79f87"}
        />
      {/each}
      <text id="cup-name" x={width / 2} y={height / 3}>{country}</text>
    </g>

    <g transform="translate({-307}  {-98}) scale(1.41)">
      <Cup />
    </g>
    <CupLegend {height} {width} {margin} />
  </g>
  <!-- <rect x="0" y="0" {width} {height} stroke="#27251F" fill="None" />
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
  .path-area {
    fill: #3c3024;
  }
  .path-m {
    fill: none;
    stroke: #27251f;
    stroke-width: 2px;
    stroke-dasharray: 8 4;
  }
  .path {
    fill: none;
    stroke: #27251f;
    stroke-width: 8px;
  }

  #cup-name {
    font-family: "Permanent Marker", sans-serif;
    font-weight: bold;
    dominant-baseline: middle;
    font-size: 1.5em;
    opacity: 1;
    text-anchor: middle;
  }
</style>
