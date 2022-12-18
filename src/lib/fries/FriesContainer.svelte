<script>
  import FriesBar from "./FriesBar.svelte";
  import FriesPanel from "./FriesPanel.svelte";
</script>

<section class="section-4">
  <div id="pannel-container-fries">
    <FriesPanel />
  </div>

  <div class="chart-container">
    <FriesBar />
  </div>
</section>

<style>
  section {
    position: relative;
  }

  #pannel-container-fries {
    bottom: 40%;
    position: absolute;
    z-index: 1;
  }
  @media only screen and (max-width: 600px) {
    #pannel-container-fries {
      bottom: 15%;
    }
  }
</style>
