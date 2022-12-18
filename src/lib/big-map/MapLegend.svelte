<script>
  export let width;
  export let height;
  export let margin;

  $: innerHeight = height - margin.top - margin.bottom;
  $: innerWidth = width - margin.left - margin.right;
</script>

<defs>
  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" style="stop-color:rgb(248, 212, 210);stop-opacity:1" />
    <stop offset="100%" style="stop-color:rgb(218, 41, 28);stop-opacity:1" />
  </linearGradient>
</defs>

<g id="map-legend">
  <rect
    id="legend-gradient"
    x={width / 2 - innerWidth / 4}
    y={575}
    width={innerWidth / 2}
    height={margin.right / 2}
    fill="url(#grad1)"
  />

  <text class="map-labels" x={margin.left * 2.5} y={594}>$1.0</text>
  <text class="map-labels" x={width - margin.right * 2.5} y={594}>$7.0</text>

  <rect
    id="legend-unknown"
    x={width / 2 - innerWidth / 4}
    y={620}
    height={margin.right / 2}
    width={innerWidth / 2}
  />
  <text class="unkown-labels" x={width/2} y={638}>No data</text>

</g>

<style>
  #legend-gradient {
    stroke: #27251f;
    stroke-width: 2px;
  }

  .map-labels {
    fill: #27251f;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    text-anchor: middle;
  }
  .unkown-labels {
    fill: #27251f;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    text-anchor: middle;
  }

  #legend-unknown {
    fill: white;
    stroke: #27251f;
    stroke-width: 2px;
  }
</style>
