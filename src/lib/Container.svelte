<script>
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
  import OutroContainer from "./intro/OutroContainer.svelte";
  import FrontPage from "./intro/FrontPage.svelte";
  import IntroPage from "./intro/IntroPage.svelte";

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
  <FrontPage />
  <IntroPage />
  <BoxContainer />
  <BurgerContainer />
  <FriesContainer />
  <CupContainer />
  <FrontPage />
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
    /* background-image: url("../assets/svg-texture.svg"); */
    background-repeat: repeat;
    /* background-image: linear-gradient(90deg, #12c2e9 0%, #c471ed 85%); */
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23aaaaaa' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
</style>
