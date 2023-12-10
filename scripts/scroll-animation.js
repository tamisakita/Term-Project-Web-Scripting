ScrollTrigger.matchMedia({
  // setup animations and ScrollTriggers for screens 1200px wide or greater...
  // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
  "(min-width: 1200px)": function () {
    // using gsap.timeline to triggrer the animation in all container (timeline)
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        start: "top center", // when the top of the trigger hits the top of the viewport
        end: "bottom center", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        snap: {
          snapTo: "labels", // snap to the closest label in the timeline
          duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
        },
        onEnter: function () {
          gsap.fromTo(
            ".container-title",
            { y: 100, autoAlpha: 0 },
            {
              duration: 2,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto",
            }
          );
        },
        onLeave: function () {
          gsap.fromTo(
            ".container-title",
            { autoAlpha: 1 },
            { autoAlpha: 0, overwrite: "auto" }
          );
        },
        onEnterBack: function () {
          gsap.fromTo(
            ".container-title",
            { y: -100, autoAlpha: 0 },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto",
            }
          );
        },
        onLeaveBack: function () {
          gsap.fromTo(
            ".container-title",
            { autoAlpha: 1 },
            { autoAlpha: 0, overwrite: "auto" }
          );
        },
      },
    });

    // setting the animation on the elements inside the container
    timeline.fromTo(".line", { width: "0%" }, { width: "100%" });

    timeline.fromTo(".animatio-img-1", { x: -80 }, { x: -40 });

    timeline.fromTo(".animatio-img-2", { x: 80 }, { x: 40 });

    // smooth scroll
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  },
});
