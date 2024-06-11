const images = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg',];
let currentImage = 0;
const galleryImage = document.getElementById('galleryImage');


setInterval(() => {
    galleryImage.src = images[currentImage];
    currentImage = (currentImage + 1) % images.length;
}, 2000);
