<script>
  import WorldMap from "./WorldMap.svelte";
  import BoxPanel from "./BoxPanel.svelte";
</script>

<section class="section-2">
  <div id="pannel-container-box">
    <BoxPanel />
  </div>

  <div class="chart-container">
    <WorldMap />
  </div>
</section>

<style>
  section {
    position: relative;
  }

  #pannel-container-box {
    bottom: 40%;
    position: absolute;
    z-index: 1;
  }
  @media only screen and (max-width: 600px) {
    #pannel-container-box {
      bottom: 5%;
    }
  }
  @media only screen and (max-width: 400px) {
    #pannel-container-box {
      bottom: 2%;
    }
  }
</style>
