// Get all the image elements in the carousel
const carouselImages = document.querySelectorAll('.slides img');

// Set the initial index for the carousel
let currentIndex = 0;

// Function to display the current image in the carousel
function showCurrentImage() {
  carouselImages.forEach((img, index) => {
    if (index === currentIndex) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

// Function to advance the carousel to the next image
function nextImage() {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  showCurrentImage();
}

// Set up the carousel to automatically advance every 5 seconds
setInterval(nextImage, 5000);

// Add click event listeners to the "Sign In" and "Download Now" buttons
const signInButton = document.querySelector('.right button');
const downloadButton = document.querySelector('#download-now button');

signInButton.addEventListener('click', () => {
  alert('Sign in functionality not implemented');
});

downloadButton.addEventListener('click', () => {
  alert('Download functionality not implemented');
});
