// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Smooth scroll behavior
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Fade-in effect for sections when scrolling
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    },
    { threshold: 0.1 }
);

sections.forEach((section) => observer.observe(section));

// Select the photo slides
const slides = document.querySelectorAll('.photo-slide');
let currentIndex = 0;

// Function to show the next slide
function showNextSlide() {
    // Hide the current slide
    slides[currentIndex].classList.remove('active');
    
    // Increment the index (loop back to 0 when reaching the end)
    currentIndex = (currentIndex + 1) % slides.length;
    
    // Show the next slide
    slides[currentIndex].classList.add('active');
}

// Initially show the first slide
slides[currentIndex].classList.add('active');

// Set the interval to change the image every 3 seconds (3000ms)
setInterval(showNextSlide, 3000);

// Typing effect for the hero section
const heroText = document.getElementById("hero-text");
let typingIndex = 0;
const typingSpeed = 100;

const heroTextContent = "Ayomide Lawal";
function typeText() {
    if (typingIndex < heroTextContent.length) {
        heroText.innerHTML += heroTextContent.charAt(typingIndex);
        typingIndex++;
        setTimeout(typeText, typingSpeed);
    }
}
window.onload = typeText;

// Form validation
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (!name || !email || !message) {
        document.getElementById("form-response").innerHTML = "All fields are required.";
        return false;
    }
    document.getElementById("form-response").innerHTML = "Your message has been sent!";
    return true;
}
