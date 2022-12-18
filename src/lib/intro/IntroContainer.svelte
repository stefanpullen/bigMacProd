<script>
  import IntroductionPanel from "./IntroductionPanel.svelte";
  import MyName from "./MyName.svelte";

  
</script>

<section class="section-1">
  <div id="pannel-container-intro">
    <IntroductionPanel />
  </div>
  <div id="myname-container">
    <MyName />
  </div>
</section>

<style>
  section {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  #myname-container {
    bottom: 40%;
    position: absolute;
    z-index: 1;
  }
  #pannel-container-intro {
    bottom: 50%;
    position: absolute;
    z-index: 1;
  }
  @media only screen and (max-width: 600px) {
    #pannel-container-intro {
      bottom: 50%;
    }
  }
</style>
