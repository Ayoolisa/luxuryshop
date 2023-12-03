var swiper = new Swiper(".slide__content", {
   slidesPerView: 3,
   spaceBetween: 35,
   loop: true,
   centreSlide: true,
   fade: true,
   grabCursor: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
     dynamicBullets: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },

   breakpoints: {
       0: {
           slidesPerView: 1,
       },
       520: {
           slidesPerView: 2,
       },
       950: {
           slidesPerView: 2,
       },

       1300: {
           slidesPerView: 3,
       },
   },
 });