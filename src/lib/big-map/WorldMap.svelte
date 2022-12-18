<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";
  import * as topojson from "topojson-client";
  import { dataset } from "../scripts/store.js";
  import Box from "./Box.svelte";
  import MapLegend from "./MapLegend.svelte";

  let svg;
  let width = 500;
  let height = 700;
  const margin = { top: 150, right: 50, bottom: 150, left: 50 };
  $: innerHeight = height - margin.top - margin.bottom;
  $: innerWidth = width - margin.left - margin.right;

  let data;
  let features = [];
  let countries = [];
  let land = [];
  let mesh;
  $: projection = d3
    .geoMercator()
    .scale(75)
    .translate([innerWidth * 0.53, height * 0.5]);

  $: path = d3.geoPath().projection(projection);

  //   Load data
  onMount(async () => {
    const world = await fetch(
      "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
    ).then((d) => d.json());

    countries = topojson.feature(world, world.objects.countries).features;
    land = topojson.feature(world, world.objects.land).features;
    mesh = topojson.mesh(world, world.objects.countries, (a, b) => a !== b);
  });

  // color scales
  data = $dataset
    .filter((d) => d.date.substring(0, 7) == "2022-07")
    .sort((a, b) => d3.descending(a.dollar_price, b.dollar_price));

  const colorArray = [
    "#da291c",
    "#de3e33",
    "#e56960",
    "#ed948e",
    "#f4bfbb",
    "#f8d4d2",
  ];

  const colorScale = d3
    .scaleQuantize()
    .domain(d3.extent(data, (d) => d.dollar_price)) // pass only the extreme values to a scaleQuantize’s domain
    .range(colorArray.reverse());

  const countryList = data.map((x) => x.name);
</script>

<svg viewBox="0 0 {width} {height}" preserveAspectRatio="xMidYMin meet">
  <g class="map-wrapper">
    <Box {height} {width} {margin} />
    <g id="land">
      {#each land as country, i}
        <path mask="url(#mask1)" d={path(country)} fill="white" />
      {/each}
      <path d={path(mesh)} class="borders" />
    </g>

    <g id="choropleths">
      <g class="choropleth">
        {#each countries as country, i}
          {#if country.properties.name != "Antarctica"}
            <path
              class="countries"
              d={path(country)}
              fill={countryList.includes(country.properties.name)
                ? colorScale(
                    data.find((x) => x.name === country.properties.name)
                      .dollar_price
                  )
                : "white"}
            />
          {/if}
        {/each}
        <!-- <path d={path(mesh)} class="borders" />  -->
      </g>
      <g class="choropleth" transform="translate({width * 0.96} 0)">
        {#each countries as country, i}
          {#if country.properties.name != "Antarctica"}
            <path
              class="countries"
              d={path(country)}
              fill={countryList.includes(country.properties.name)
                ? colorScale(
                    data.find((x) => x.name === country.properties.name)
                      .dollar_price
                  )
                : "white"}
            />
          {/if}
        {/each}
        <!-- <path d={path(mesh)} class="borders" />  -->
      </g>
    </g>
  </g>
  <MapLegend {height} {width} {margin} />
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
  #choropleths {
    opacity: 0;
    stroke-width: 1;
  }
  .choropleth {
    stroke-width: 1;
  }
  .countries {
    stroke: white;
    stroke-width: 0.5;
    /* fill: #ffc72c; */
    /* fill:#da291c */
  }

  .borders {
    stroke-width: 2;
    fill: none;
  }
</style>
