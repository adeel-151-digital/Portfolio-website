// // Main JavaScript for full animation and functionality

// // Menu Toggle for Hamburger
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('navlist');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('show');
});



// // Swiper for Testimonial Section
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,  // Ensure pagination is clickable
  },
  navigation: {
    nextEl: '.swiper-button-next',  // Ensure navigation buttons are referenced correctly
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
