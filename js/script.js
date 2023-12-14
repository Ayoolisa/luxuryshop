// Get the slide wrapper element
const slideWrapper = document.querySelector('.slide-wrapper .image_gallery');

// Set initial position and variables
let startX = 0;
let isMouseDown = false;
let translateX = 0;

// Add event listeners for mouse gestures
slideWrapper.addEventListener('mousedown', handleMouseDown);
slideWrapper.addEventListener('mousemove', handleMouseMove);
slideWrapper.addEventListener('mouseup', handleMouseUp);
slideWrapper.addEventListener('mouseleave', handleMouseUp);

// Add event listeners for click events
const prevSlideButton = document.querySelector('.prev-slide');
const nextSlideButton = document.querySelector('.next-slide');
prevSlideButton.addEventListener('click', handlePrevSlide);
nextSlideButton.addEventListener('click', handleNextSlide);

// Mouse down event handler
function handleMouseDown(event) {
  isMouseDown = true;
  startX = event.pageX - slideWrapper.offsetLeft;
  slideWrapper.style.cursor = 'grabbing';
}

// Mouse move event handler
function handleMouseMove(event) {
  if (!isMouseDown) return;
  event.preventDefault();
  const x = event.pageX - slideWrapper.offsetLeft;
  const walk = (x - startX) * 2;
  translateX += walk;
  slideWrapper.style.transform = `translateX(${translateX}px)`;
}

// Mouse up event handler
function handleMouseUp() {
  isMouseDown = false;
  slideWrapper.style.cursor = 'grab';
}

// Click event handler for previous slide button
function handlePrevSlide() {
  translateX += 100; // Adjust the value as needed
  slideWrapper.style.transform = `translateX(${translateX}px)`;
}

// Click event handler for next slide button
function handleNextSlide() {
  translateX -= 100; // Adjust the value as needed
  slideWrapper.style.transform = `translateX(${translateX}px)`;
}
