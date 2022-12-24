<script>
  import BurgerBars from "./BurgerBars.svelte";
  import BurgerPanel from "./BurgerPanel.svelte";
</script>

<section class="section-3">
  <div id="pannel-container-burger">
    <BurgerPanel />
  </div>

  <div class="chart-container">
    <BurgerBars />
  </div>
</section>

<style>
  section {
    position: relative;
  }

  #pannel-container-burger {
    bottom: 40%;
    position: absolute;
    z-index: 1;
  }
  @media only screen and (max-width: 600px) {
    #pannel-container-burger {
      bottom: 10%;
    }
  }
</style>
