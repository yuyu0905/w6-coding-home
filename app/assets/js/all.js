$(function() {
  var swiper = new Swiper(".swiper-program", {
    slidesPerView: 3,
    spaceBetween: 8,
    //多欄
    breakpoints: {
        768: {
            slidesPerView: 6,
            spaceBetween: 8,
        },
        992: {
            slidesPerView: 9,
            spaceBetween: 16,
            
        }
    },
    speed: 1500,
    autoplay: {
      disableOnInteraction: false,
      delay: 0
    },
  });



  const shareSwiper = new Swiper(".share-swiper", {
    // Optional parameters
    effect: "fade",
    loop: true,
    fadeEffect: {
      crossFade: true
    },
    // 分頁
    pagination: {
      el: ".share-swiper-pagination",
      clickable: true
    },
    // 左右箭頭
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  
});