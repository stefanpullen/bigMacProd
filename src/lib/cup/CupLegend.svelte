<script>
  export let width;
  export let height;
  export let margin;

  $: innerHeight = height - margin.top - margin.bottom;
  $: innerWidth = width - margin.left - margin.right;
</script>

<g id="cup-legend">
  <text
    class="labels"
    id="first-date"
    x={margin.left}
    y={margin.top * 1.3 + innerHeight}>2012</text
  >
  <text
    class="labels"
    id="last-date"
    x={width - margin.right}
    y={margin.top * 1.3 + innerHeight}>2022</text
  >
  <text
    class="labels"
    id="first-dollar"
    x={margin.left * 0.4}
    y={margin.top  + innerHeight}>$0.0</text
  >
  <text
    class="labels"
    id="middle-dollar"
    x={innerWidth + margin.left *1.2}
    y={margin.top * 3 }>$3.8</text
  >
  <text
    class="labels"
    id="middle-dollar"
    x={innerWidth + margin.left *1.2}
    y={margin.top * 3.1 }>Average</text
  >
  <text
    class="labels"
    id="last-dollar"
    x={margin.left * 0.4}
    y={margin.top * 2 }>$7.0</text
  >
</g>

<style>
  .labels {
    fill: #27251f;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
  }

  #first-date {
    text-anchor: start;
  }
  #last-date {
    text-anchor: end;
  }

  #legend-unknown {
    fill: white;
    stroke: #27251f;
    stroke-width: 1px;
  }
</style>
