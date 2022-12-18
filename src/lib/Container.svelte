<script>
  import FrontPage from "./FrontPage.svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import Scrollbar from "smooth-scrollbar";
  import { onMount } from "svelte";
  import { initAnimations } from "./scripts/animations.js";
  import BurgerContainer from "./burger/BurgerContainer.svelte";
  import BoxContainer from "./big-map/BoxContainer.svelte";
  import FriesContainer from "./fries/FriesContainer.svelte";
  import CupContainer from "./cup/CupContainer.svelte";
  import IntroContainer from "./intro/IntroContainer.svelte";

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scroller = document.querySelector(".scroll-container");

    const smoothScroll = Scrollbar.init(scroller, {
      damping: 0.1,
      delegateTo: document,
      alwaysShowTracks: true,
    });

    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
        if (arguments.length) {
          smoothScroll.scrollTop = value;
        }
        return smoothScroll.scrollTop;
      },
    });
    smoothScroll.addListener(() => {
      ScrollTrigger.update();
    });
    document.querySelector(".scroll-container").focus();
    ScrollTrigger.defaults({
      scroller: scroller,
      pinType: "transform",
    });

    initAnimations();
  });
</script>

<div class="overlay" />

<div class="scroll-container" tabindex="-1">
  <!-- <FrontPage /> -->
  <IntroContainer />
  <BoxContainer />
  <BurgerContainer />
  <FriesContainer />
  <CupContainer />
  <IntroContainer />
</div>

<style>
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }

  .scroll-container {
    height: 100vh;
    background-image: url("../assets/svg-texture.svg");
    background-repeat: repeat;
    /* background-image: linear-gradient(90deg, #12c2e9 0%, #c471ed 85%); */
  }
</style>
