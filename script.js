// Select elements
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const navbar = document.querySelector(".navbar");

// Toggle mobile menu
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  // Menu animation (optional: animate bars)
  const bars = menuBtn.querySelectorAll(".menu-bar");
  if (navLinks.classList.contains("show")) {
    bars[0].style.transform = "rotate(45deg) translate(5px, 5px)";
    bars[1].style.opacity = "0";
    bars[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
  } else {
    bars[0].style.transform = "rotate(0)";
    bars[1].style.opacity = "1";
    bars[2].style.transform = "rotate(0)";
  }
});

// Change navbar background on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#222";
  } else {
    navbar.style.backgroundColor = "#333";
  }
});



// Select all "Learn More" buttons
const learnMoreButtons = document.querySelectorAll(".learn-more-btn");

// Add an event listener to each button
learnMoreButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert("More details about this service are coming soon!");
  });
});

// Animation on scroll
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (cardTop < windowHeight - 100) {
      card.style.transform = "translateY(0)";
      card.style.opacity = "1";
    }
  });
});

// Initial state of cards
cards.forEach(card => {
  card.style.transform = "translateY(50px)";
  card.style.opacity = "0";
  card.style.transition = "transform 0.5s ease, opacity 0.5s ease";
});


// Scroll Animation for About Section
const aboutSection = document.querySelector(".about-us");
const aboutImage = document.querySelector(".about-image img");
const aboutText = document.querySelector(".about-text");

// Add animation classes initially
aboutText.classList.add("animate-fade");
aboutImage.classList.add("animate-fade");

// Scroll event listener
window.addEventListener("scroll", () => {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
        aboutText.classList.add("visible");
        aboutImage.classList.add("visible");
    }
});

// Interactive "Read More" Button
const readMoreBtn = document.querySelector(".read-more-btn");

readMoreBtn.addEventListener("click", () => {
    alert("More details about our workshop will be added soon!");
});

// Scroll Animation for Contact Section
const contactSection = document.querySelector(".contact-us");
const contactText = document.querySelector(".contact-text");
const contactForm = document.querySelector(".contact-form");

// Add animation classes initially
contactText.classList.add("animate-fade");
contactForm.classList.add("animate-fade");

// Scroll event listener to trigger animations
window.addEventListener("scroll", () => {
  const sectionTop = contactSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    contactText.classList.add("visible");
    contactForm.classList.add("visible");
  }
});

// Handle Form Submission
const contactFormElement = document.getElementById("contactForm");
const formResponse = document.querySelector(".form-response");

contactFormElement.addEventListener("submit", (e) => {
  e.preventDefault();

  // Simulate form submission with animations
  formResponse.textContent = "Sending your message...";
  formResponse.style.color = "#f90";

  setTimeout(() => {
    formResponse.textContent = "Thank you! Your message has been sent.";
    formResponse.style.color = "green";

    // Reset form fields after submission
    contactFormElement.reset();
  }, 2000);
});


// Scroll Animation for Footer
const footerSections = document.querySelectorAll(".footer-section");
const footerBottom = document.querySelector(".footer-bottom");

window.addEventListener("scroll", () => {
  footerSections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 50) {
      section.classList.add("visible");
    }
  });

  if (footerBottom.getBoundingClientRect().top < window.innerHeight - 50) {
    footerBottom.classList.add("visible");
  }
});

// Smooth Scroll to Top
const scrollToTopButton = document.getElementById("scrollToTop");

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Dynamic Footer Year (Optional)
const footerYear = new Date().getFullYear();
document.querySelector(".footer-bottom p").innerHTML = `&copy; ${footerYear} AutoHub. All rights reserved.`;
