const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

// Function to move slider
function showSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Next button
nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length;
  showSlide();
});

// Previous button
prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  showSlide();
});

// Auto-slide every 3 seconds
setInterval(() => {
  index = (index + 1) % images.length;
  showSlide();
}, 3000);
