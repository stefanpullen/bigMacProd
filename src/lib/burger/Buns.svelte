<script>
  export let width;
  export let height;
  export let margin;
  export let yScale;

  $: innerHeight = height - margin.top - margin.bottom;
  $: innerWidth = width - margin.left - margin.right;
</script>

<g id="top-bun">
  <path
    class="bun"
    d="
M {margin.left},{margin.top}
L {margin.left + innerWidth},{margin.top}
C  {margin.left * 1.1 + innerWidth},{margin.top * 1} {margin.left * 1.1 +
      innerWidth},{margin.top * 0.9} {margin.left * 1.1 +
      innerWidth},{margin.top * 0.9}
C {margin.left * 0.7 + innerWidth},{margin.top * 0.4} {margin.left *
      1.2},{margin.top * 0.4}  {margin.left * 0.8},{margin.top * 0.9}
C {margin.left * 0.8},{margin.top} {margin.left *
      0.9},{margin.top} {margin.right},{margin.top}
"
  />
  <g transform="translate({innerWidth / 2.4} ,{innerHeight / 2.4}) rotate(-10)">
    <ellipse class="seeds" cx={-25} cy={8} rx="8" ry="3" />
    <ellipse class="seeds" cx={-50} cy={10} rx="8" ry="3" />
    <ellipse class="seeds" cx={-40} cy={0} rx="8" ry="3" />
  </g>
</g>

<rect
  id="bottom-bun"
  class="bun"
  x={margin.left * 0.85}
  y={innerHeight + margin.bottom + 5}
  width={innerWidth * 1.05}
  height={yScale.bandwidth() * 1.6}
  rx=15
  ry=2000

/>

<style>
  #bottom-bun {
    /* rx: 15;
    ry: 200; */
    overflow: hidden;
  }
  .bun {
    fill: #ffc72c;
  }

  .seeds {
    fill: white;
  }
</style>
