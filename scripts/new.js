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

