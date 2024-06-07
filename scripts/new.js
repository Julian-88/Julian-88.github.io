document.getElementById('home-link').addEventListener('click', function(event) {
    event.preventDefault();
    loadPage('home');
});

document.getElementById('features-link').addEventListener('click', function(event) {
    event.preventDefault();
    loadPage('features');
});

document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault();
    loadPage('contact');
});

document.getElementById('get-started').addEventListener('click', function(event) {
    event.preventDefault();
    loadPage('features');
});

function loadPage(page) {
    const mainContent = document.getElementById('main-content');

    switch (page) {
        case 'home':
            mainContent.innerHTML = `
                <section class="hero">
                    <div class="container">
                        <h1>Welcome to My Website</h1>
                        <p>tagline or mission statement here</p>
                        <a href="#" class="cta-button" id="get-started">Get Started</a>
                    </div>
                </section>
                <section class="introduction">
                    <div class="container">
                        <h2>About Us</h2>
                        <p>Ask mom what she wants here</p>
                    </div>
                </section>
            `;
            document.getElementById('get-started').addEventListener('click', function(event) {
                event.preventDefault();
                loadPage('features');
            });
            break;
        case 'features':
            mainContent.innerHTML = `
                <section class="features">
                    <div class="container">
                        <h2>Our Features</h2>
                        <div class="feature">
                            <img src="feature1.png" alt="Feature 1">
                            <h3>Feature 1</h3>
                            <p>Short description of feature 1.</p>
                        </div>
                        <div class="feature">
                            <img src="feature2.png" alt="Feature 2">
                            <h3>Feature 2</h3>
                            <p>Short description of feature 2.</p>
                        </div>
                    </div>
                </section>
            `;
            break;
        case 'contact':
            mainContent.innerHTML = `
                <section class="contact">
                    <div class="container">
                        <h2>Contact Us</h2>
                        <form action="submit_form.php" method="post">
                            <input type="text" name="name" placeholder="Your Name" required>
                            <input type="email" name="email" placeholder="Your Email" required>
                            <textarea name="message" placeholder="Your Message" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </section>
            `;
            break;
    }
}