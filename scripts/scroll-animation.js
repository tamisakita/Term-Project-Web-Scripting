// registered ScrolllTrigger with the method registerPlugin to use its features
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  // setup animations and ScrollTriggers for screens 1200px wide or greater...
  // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
  "(min-width: 1200px)": function () {
    // using gsap.timeline to triggrer the animation in all container (timeline)
    // storage the timeline in a variable to use it on specific elements later
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        start: "top center", // where the scrollTrigger will start
        end: "bottom center", //where the scrollTrigger will end
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        snap: {
          snapTo: "labels", // snap to the closest label in the timeline
          duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
        },

        // animation for the .container-title using gsap ScrollStrigger
        // setting the animation for the title when it enter, leave, enter back and leave back
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

    // setting the animation for one specific element .line that needs to finish before the last element of the timeline
    gsap.fromTo(
      ".line",
      { width: "0%" },
      {
        width: "100%",
        scrollTrigger: {
          trigger: ".line",
          scrub: true,
        },
      }
    );

    // setting the animation on the elements inside the container
    timeline.fromTo(".animatio-img-1", { x: -80 }, { x: -40 }, 0);

    timeline.fromTo(".animation-text-1", { x: 80 }, { x: 40 }, "<");

    timeline.fromTo(".animatio-img-2", { x: 80 }, { x: 40 });

    timeline.fromTo(".animation-text-2", { x: -80 }, { x: -40 }, "<");
  },
});
