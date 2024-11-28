const swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    501: {
      enabled: false,
    },
  },
});
