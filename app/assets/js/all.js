$(function() {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    // 分頁
    pagination: {
      el: ".swiper-pagination"
    },
    // 左右箭頭
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  
});