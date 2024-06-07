document.getElementById('home.html').addEventListener('click', function(event) {
    event.preventDefault();
    loadPage('home');
});

document.getElementById('features.html').addEventListener('click', function(event) {
    event.preventDefault();
    loadPage('features');
});

document.getElementById('contact.html').addEventListener('click', function(event) {
    event.preventDefault();
    loadPage('contact');
});

document.getElementById('cta-button').addEventListener('click', function(event) {
    event.preventDefault();
    loadPage('features');
});

const images = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg'];
let currentImage = 0;
const galleryImage = document.getElementById('galleryImage');

setInterval(() => {
    galleryImage.src = images[currentImage];
    currentImage = (currentImage + 1) % images.length;
},2000);
