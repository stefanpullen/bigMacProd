<script>
  import { dataset } from "../scripts/store";
  import * as d3 from "d3";
  import Counts from "./Counts.svelte";
  import Buns from "./Buns.svelte";

  let data;

  let svg;
  let width = 500;
  let height = 700;

  const margin = { top: 200, right: 50, bottom: 200, left: 50 };
  $: innerHeight = height - margin.top - margin.bottom;
  $: innerWidth = width - margin.left - margin.right;

  data = $dataset
    .filter((d) => d.date.substring(0, 7) == "2022-07")
    .map((d) => {
      let obj = {};
      obj.name = d.name;
      obj.date = d.date;
      obj.dollar_price = +d.dollar_price;
      return obj;
    });

  const avgObj = {
    name: "Average",
    date: "2022-07-01",
    dollar_price: +d3.mean(data.map((d) => d.dollar_price)).toFixed(2),
  };
  data.push(avgObj);
  data = data.sort((a, b) => d3.descending(b.dollar_price, a.dollar_price));

  let indexMax = Array.from(new Set($dataset.map((d) => d.name))).length - 10;
  let index1 = 0;
  let index2 = 6;
  let indexer = 0;
  const maxPrice = d3.max(data, (d) => d.dollar_price);

  $: dataPlot = data.slice(index1 + indexer, index2 + indexer).reverse();
  $: xDomain = data.map((d) => +d.dollar_price);

  $: yDomain = dataPlot.map((d) => d.name);
  $: yDomainData = data.map((d) => d.name);

  $: yScale = d3
    .scaleBand()
    .domain(yDomain)
    .range([innerHeight + margin.top, margin.top])
    .padding(0.2);

  $: yScaleData = d3
    .scaleBand()
    .domain(yDomainData)
    .range([
      innerHeight * (yDomainData.length / yDomain.length) + margin.top,
      margin.top,
    ])
    .padding(0.2);
  $: xScale = d3
    .scaleLinear()
    .domain([0, d3.max(xDomain)])
    .range([margin.left, innerWidth + 10])
    .nice();
</script>

<svg viewBox="0 0 {width} {height}" preserveAspectRatio="xMidYMin meet">
  <g id="burger-bars">
    {#each data as d, index}
      <rect
        class="bars"
        x={margin.left}
        y={d.name == "Average" ? yScaleData(d.name) - 5 : yScaleData(d.name)}
        width={xScale(+d.dollar_price)}
        height={d.name == "Average"
          ? yScale.bandwidth() + 10
          : yScale.bandwidth()}
        fill={d.name == "Average" ? "#ffc72c" : "#da291c"}
        rx="15"
      />
      <rect
        class="bars-containers"
        x={margin.left}
        y={d.name == "Average" ? yScaleData(d.name) - 5 : yScaleData(d.name)}
        width={xScale(maxPrice)}
        height={d.name == "Average"
          ? yScale.bandwidth() + 10
          : yScale.bandwidth()}
        stroke={d.name == "Average" ? "#ffc72c" : "#da291c"}
        rx="15"
      />
    {/each}
    <Counts {margin} {xScale} yScale={yScaleData} dataPlot={data} />
  </g>

  <rect class="cover-up" x="0" y="0" {width} height={margin.top} />
  <rect
    class="cover-up"
    x="0"
    y={margin.top + innerHeight}
    {width}
    height={height + 200}
  />

  <g id="cover-chart">
    {#each data.slice(65, 71) as d, index}
      <rect
        class="slice"
        id={d.name}
        x={margin.left}
        y={yScaleData(d.name)}
        width={xScale(maxPrice)}
        height={yScale.bandwidth()}
        rx="15"
      />
    {/each}
  </g>

  <Buns {width} {height} {margin} {yScale} />
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
  #burger-bars {
    opacity: 0;
  }
  .bars {
    /* fill: #da291c; */
    /* rx: 15; */
    overflow: hidden;
  }
  .bars-containers {
    fill: none;
    /* stroke: #da291c; */
    stroke-width: 3;
    overflow: hidden;

    /* rx: 15; */
  }
  .slice {
    fill: #da291c;
    stroke: #da291c;
    stroke-width: 3;
    overflow: hidden;

    /* rx: 15; */
  }

  .cover-up {
    fill: white;
  }
</style>
