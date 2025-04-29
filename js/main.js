// main.js - Main functionality
document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');
  
  hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navList.classList.toggle('active');
  });

  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navList.classList.remove('active');
      });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });

  // Sticky header on scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', function() {
      header.classList.toggle('sticky', window.scrollY > 0);
  });

  // Animate skill bars when they come into view
  const skillBars = document.querySelectorAll('.skill-progress');
  
  function animateSkillBars() {
      skillBars.forEach(bar => {
          const width = bar.getAttribute('data-width');
          if (isElementInViewport(bar)) {
              bar.style.width = width + '%';
          }
      });
  }
  
  function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.bottom >= 0
      );
  }
  
  // Run on load and scroll
  animateSkillBars();
  window.addEventListener('scroll', animateSkillBars);
});

// theme-switcher.js - Day/Night mode toggle
document.addEventListener('DOMContentLoaded', function() {
  const themeSwitch = document.getElementById('theme-switch');
  const htmlElement = document.documentElement;
  
  // Check for saved theme preference or use preferred color scheme
  const savedTheme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  // Apply the saved theme
  if (savedTheme === 'dark') {
      htmlElement.setAttribute('data-theme', 'dark');
      themeSwitch.checked = true;
  } else {
      htmlElement.setAttribute('data-theme', 'light');
      themeSwitch.checked = false;
  }
  
  // Theme switcher event listener
  themeSwitch.addEventListener('change', function() {
      if (this.checked) {
          htmlElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
      } else {
          htmlElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
      }
  });
});

// animations.js - For any animations
document.addEventListener('DOMContentLoaded', function() {
  // Animate elements when they come into view
  const animateOnScroll = function() {
      const elements = document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right');
      
      elements.forEach(element => {
          if (isElementInViewport(element)) {
              element.classList.add('animate');
          }
      });
  };
  
  // Check if element is in viewport
  function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
          rect.bottom >= 0
      );
  }
  
  // Run on load and scroll
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});

