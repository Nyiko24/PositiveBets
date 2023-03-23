const slideshow = document.getElementById("slideshow");
const images = slideshow.getElementsByTagName("img");
let currentIndex = 0;
images[currentIndex].classList.add("active");

let slideshowInterval = setInterval(() => {
  images[currentIndex].classList.remove("active");
  currentIndex++;
  if (currentIndex === images.length) {
    currentIndex = 0;
  }
  images[currentIndex].classList.add("active");
}, 3000);
setTimeout(() => {
  clearInterval(slideshowInterval);
}, 60000);