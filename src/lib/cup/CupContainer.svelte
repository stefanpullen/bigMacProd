<script>
  import CupBubble from "./CupBubble.svelte";
  import CupPanel from "./CupPanel.svelte";
</script>

<section class="section-5">
  <div id="pannel-container-cup">
    <CupPanel />
  </div>

  <div class="chart-container">
    <CupBubble />
  </div>
</section>

<style>
  section {
    position: relative;
  }

  #pannel-container-cup {
    bottom: 40%;
    position: absolute;
    z-index: 1;
  }
  @media only screen and (max-width: 600px) {
    #pannel-container-cup {
      bottom: 5%;
    }
  }
  @media only screen and (max-width: 400px) {
    #pannel-container-cup {
      bottom: 2%;
    }
  }
</style>
