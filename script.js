// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature, .screenshot, .testimonial');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// Add click tracking for App Store button
document.addEventListener('DOMContentLoaded', function() {
    const appStoreButtons = document.querySelectorAll('a[href*="apps.apple.com"]');
    
    appStoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('App Store button clicked');
        });
    });
});

// Preload critical images
document.addEventListener('DOMContentLoaded', function() {
    const criticalImages = [
        'assets/images/mega-watch-logo.webp'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Error handling for missing images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn('Failed to load image:', this.src);
            // Hide broken images
            this.style.display = 'none';
        });
    });
});

