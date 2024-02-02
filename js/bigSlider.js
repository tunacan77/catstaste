var swiper = new Swiper(".mySwiper2", {
    effect: "fade",
    speed:2000,
    autoplay: {
        delay: 3000,
      },
    fadeEffect: {
        crossFade: true,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        hideOnClick: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});