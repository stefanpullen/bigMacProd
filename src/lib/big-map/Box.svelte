<script>
  export let height;
  export let width;
  export let margin;

  $: innerHeight = height - margin.top - margin.bottom;
  $: innerWidth = width - margin.left - margin.right;
</script>

<mask id="mask1">
  <rect {width} {height} x="0" y="0" fill="black" />
  <rect
    id="masker1"
    width={innerWidth}
    height={innerHeight * 0.77}
    x={margin.left + 3}
    y={margin.top + 3}
    fill="white"
  />
</mask>
<mask id="mask2">
  <rect {width} {height} x="0" y="0" fill="black" />
  <path
    fill="white"
    transform=" translate({250}  {height / 2}) scale(0.5)"
    d="M -400 -400 L 400 -400 L 400 400 L -400 400 z M -450 -450 L -400 -400 M 450 -450 L 400 -400 M 500 500 L 400 400 M -500 500 L -400 400 M -450 -450 C -150 -500 150 -500 450 -450 C 480 -133.3333 495 183.3333 500 500 C 166.3333 550 -167.3333 550 -500 500 C -495 183.3333 -480-133.3333 -450 -450 z"
  /></mask
>

<path
  class="burger-box-fill"
  transform=" translate({250}  {height / 2}) scale(0.5)"
  d="M -400 -400 L 400 -400 L 400 400 L -400 400 z M -450 -450 L -400 -400 M 450 -450 L 400 -400 M 500 500 L 400 400 M -500 500 L -400 400 M -450 -450 C -150 -500 150 -500 450 -450 C 480 -133.3333 495 183.3333 500 500 C 166.3333 550 -167.3333 550 -500 500 C -495 183.3333 -480-133.3333 -450 -450 z"
/>

<rect
  mask="url(#mask2)"
  class="box-line"
  x={margin.left - 2}
  y={0}
  width={innerWidth + 2}
  {height}
/>
<path
  class="burger-box-line"
  transform=" translate({250}  {height / 2}) scale(0.5)"
  d="M -400 -400 L 400 -400 L 400 400 L -400 400 z M -450 -450 L -400 -400 M 450 -450 L 400 -400 M 500 500 L 400 400 M -500 500 L -400 400 M -450 -450 C -150 -500 150 -500 450 -450 C 480 -133.3333 495 183.3333 500 500 C 166.3333 550 -167.3333 550 -500 500 C -495 183.3333 -480-133.3333 -450 -450 z"
/>

<text
  id="big"
  class="labels-box"
  x={innerWidth * 0.65}
  y={innerHeight + margin.top * 0.48}>Big</text
>
<text
  id="map"
  class="labels-box"
  x={innerWidth * 0.65}
  y={innerHeight + margin.top * 0.85}>Map</text
>

<style>
  .burger-box-fill {
    fill: white;
  }
  .burger-box-line {
    fill: none;
    stroke: #27251f;
    stroke-width: 4;
  }
  .box-line {
    fill: #da291c;
    stroke: #27251f;
  }

  .labels-box {
    fill: White;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    stroke: white;
    stroke-width: 2;
  }
  #big {
    font-size: 4.5rem;
  }
  #map {
    font-size: 4rem;
  }
</style>
