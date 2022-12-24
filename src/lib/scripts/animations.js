import gsap, { Power1, Power2, Power4, Power3, SteppedEase } from "gsap";
import { backOut, bounceOut, expoIn, expoOut } from "svelte/easing";
import { writable } from "svelte/store";

export function boxAnimation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-2",
      start: "top top",
      pin: true,
      scrub: 1,
      end: "+=500%",
      anticipatePin: 1,
    },
  });
  // tl.from("#p-container-box p", {
  //   height: 0,
  //   duration: 1,
  //   ease: Power2.easeOut,
  // });

  tl.from(".map-wrapper", {
    y: "+=1000",
    // rotate: 160,
    transformOrigin: "50% 50%",
    duration: 3,
    ease: backOut,
  });

  // tl.from(".box-line", {
  //   height: 0,
  //   duration: 2,
  //   ease: Power2.easeOut,
  // });
  tl.to(".map-wrapper", {
    delay: 3,
    scale: 2,
    duration: 2,
    // transformOrigin: "50% 50%",
    ease: Power2.easeInOut,
  });
  tl.to("#choropleths", {
    opacity: 1,
  });
  tl.to(
    ".burger-box",
    {
      opacity: 0,
    },
    "<"
  );

  tl.to(
    ".labels-box",
    {
      opacity: 0,
    },
    "<"
  );
  tl.to("#land", {
    opacity: 0,
    duration: 0,
  });

  tl.to(".box-line", { height: 450, ease: Power2.easeOut, duration:3  });
  tl.from("#map-legend", { opacity: 0 });

  tl.to("#choropleths", {
    delay: 2,
    x: "-=400",
    duration: 15,
    ease: Power1.easeInOut,
  });

  tl.to(
    "#pannel-container-box",
    { yPercent: -350, duration: 2, ease: Power2.easeIn },
    "-=50%"
  );
  return tl;
}

export function burgerAnimation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-3",
      start: "top top",
      pin: true,
      scrub: 1,
      end: "+=500%",
      anticipatePin: 1,
    },
  });

  // tl.from("#p-container-burger p", {
  //   height: 0,
  //   duration: 1,
  //   ease: Power2.easeOut,
  // });

  tl.from("#bottom-bun", {
    y: "-=1000",
    rotate: 40,
    transformOrigin: "50% 50%",
    duration: 2,
    ease: backOut,
  });

  tl.from(".slice", {
    stagger: 0.2,
    y: "-=600",
    transformOrigin: "50% 50%",
    duration: 1,
    ease: Power2.easeIn,
  });

  tl.from("#top-bun", {
    y: "-=1000",
    rotate: 40,
    transformOrigin: "50% 50%",
    duration: 2,
    ease: backOut,
  });
  tl.to("#burger-bars", {
    duration: 0,
    opacity: 1,
  });

  tl.to(".slice", {
    delay: 2,
    duration: 1,
    opacity: 0,
    width: 0,
    ease: Power2.easeIn,
  });
  tl.to(".counter", {
    duration: 1,
    opacity: 1,
  });

  tl.to("#burger-bars", {
    delay: 2,
    yPercent: -92,
    duration: 20,
  });

  tl.to(
    "#pannel-container-burger",
    { yPercent: -450, duration: 2, ease: Power2.easeIn },
    "-=50%"
  );

  return tl;
}

export function friesAnimation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-4",
      start: "top top",
      pin: true,
      scrub: 1,
      end: "+=500%",
      anticipatePin: 1,
    },
  });

  // tl.from("#p-container-fries p", {
  //   height: 0,
  //   duration: 1,
  //   ease: Power2.easeOut,
  // });
  tl.from(".fries-and-m", {
    rotate: 30,
    y: 710,
    duration: 2,
    ease: Power4.easeOut,
  });

  tl.from(".bars1", {
    y: -500,
    ease: Power1.easeOut,
    rotate: -40,

    transformOrigin: "100% 100%",
    stagger: {
      from: "random",
      ease: "power2.Out",
      amount: 3,
    },
  });

  tl.from(
    "#first-label",
    {
      opacity: 0,
    },
    "<"
  );
  tl.from(".fries-labels", {
    opacity: 0,
  });
  tl.from(".bars2", {
    rotate: 40,
    delay: 2,
    y: -500,
    ease: Power1.easeOut,
    transformOrigin: "100% 100%",
    stagger: {
      from: "random",
      ease: "power2.Out",
      amount: 3,
    },
  });
  tl.from(
    "#last-label",
    {
      opacity: 0,
    },
    "<"
  );
  tl.to(
    "#pannel-container-fries",
    { yPercent: -450, duration: 2, ease: Power2.easeIn },
    "-=50%"
  );

  return tl;
}

export const count = writable(0);
export function bubbleAnimation() {
  let obj = { myNum: 0 };
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-5",
      start: "top top",
      pin: true,
      scrub: 1,
      end: "+=500%",
      anticipatePin: 1,
    },
  });
  // tl.from("#p-container-cup p", {
  //   height: 0,
  //   duration: 1,
  //   ease: Power2.easeOut,
  // });
  tl.from("#cup-and-chart", { y: -800, ease: Power2.easeIn, duration: 3 });
  tl.from(".bubble", { delay: 2, opacity: 0 });
  tl.from("#cup-name", { opacity: 0 }, "<");
  tl.from("#cup-legend", { opacity: 0 });

  tl.to(obj, {
    delay: 2,
    myNum: 72,
    duration: 15,
    ease: SteppedEase.config(72),
    onUpdate: function () {
      count.update((n) => obj.myNum);
    },
  });
  tl.to(
    "#pannel-container-cup",
    { yPercent: -450, duration: 2, ease: Power2.easeIn },
    "-=50%"
  );
  return tl;
}

  

export function initAnimations() {
  boxAnimation();
  burgerAnimation();
  friesAnimation();
  bubbleAnimation();
}
