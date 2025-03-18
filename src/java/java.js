let index = 1;
const carousel = document.querySelector("[data-carousel-inner]");
const prevButton = document.querySelector("[data-prev]");
const nextButton = document.querySelector("[data-next]");

function updateCarousel() {
  let offset = -index * (100 / 3);
  carousel.style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
  index += direction;
  if (index < 0) index = totalItems - 1;
  if (index >= totalItems) index = 0;
  updateCarousel();
}
