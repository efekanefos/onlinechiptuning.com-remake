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
