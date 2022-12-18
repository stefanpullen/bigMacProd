<script>
  export let width;
  export let height;
  export let margin;
  $: innerHeight = height - margin.top - margin.bottom;
  $: innerWidth = width - margin.left - margin.right;
</script>

<g
  class="fries-and-m"
  transform="translate({margin.left} {margin.top + innerHeight / 2})"
>
  <path
    id="friesbox"
    d="M 0 0 L 300 -100 C 800 600 1500 600 2000 -100 L 2300 0 L 2100 2000 L 2000 2000 C 1500 1700 800 1700 300 2000 L 200 2000 Z"
    transform="scale(0.174) translate({0} {0})"
  />
  <path
    id="M"
    d="M194.5 16.8c23.3 0 42.2 98.3 42.2 219.7h34C270.7 105.8 236.4 0 194.4 0c-24 0-45.2 31.7-59.2 81.5C121.2 31.7 100 0 76.2 0 34.2 0 0 105.7 0 236.4h34C34 115 52.7 16.8 76 16.8s42.2 90.8 42.2 202.8H152c0-112 19-202.8 42.3-202.8"
    transform="scale(0.6) translate({width * 0.4} {height * 0.3})"
  />
</g>
<text
  class="fries-labels"
  x={margin.left * 1.4}
  y={margin.top + innerHeight * 0.6}>$1.0</text
>
<text class="fries-labels" x={innerWidth} y={margin.top + innerHeight * 0.6}
  >$7.0</text
>

<style>
  #M {
    fill: #ffc72c;
  }
  .fries-labels {
    fill: #27251f;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
  }

  #friesbox {
    fill: #da291c;
    rx: 10;
    ry: 20;
  }
</style>
