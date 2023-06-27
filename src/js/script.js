import App from './controller.js';

new App();
console.log(typeof undefined);

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
