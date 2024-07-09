document.addEventListener("DOMContentLoaded", function () {
  new Splide(".carBrandSlider").mount(window.splide.Extensions);
  var carBrandSlider = new Splide(".carBrandSlider", {
    rewind: true,
    drag: "free",
    focus: "center",
    perPage: 8,
    autoScroll: {
      speed: 1,
    },
    arrows: false,
  });
  carBrandSlider.mount();
});
document.addEventListener("DOMContentLoaded", function () {
  var serviceSlider = new Splide(".serviceSlider", {
    perPage: 3,
    rewind: true,
  });
  serviceSlider.mount();
});
document.addEventListener("DOMContentLoaded", function () {
  var homeServiceSlider = new Splide(".homeServiceSlider", {
    perPage: 4,
    rewind: true,
    rewindSpeed: 500,
    autoplay: true,
    gap: "0.5rem",
    perMove: 1,
    speed: 500,
    breakpoints: {
      1000: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      550: {
        perPage: 1,
      },
    },
  });
  homeServiceSlider.mount();
});
