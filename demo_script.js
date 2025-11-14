// script.js - Replace your current file with this (or paste before </body>)

// Run after DOM is ready
document.addEventListener('DOMContentLoaded', () => {

  // ==================== toggle icon navbar ====================
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    });
  }

  // ==================== scroll section active link ====================
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');

  window.addEventListener('scroll', () => {
    const top = window.scrollY;

    sections.forEach(sec => {
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => link.classList.remove('active'));
        const selector = `header nav a[href*="${id}"]`;
        const activeLink = document.querySelector(selector);
        if (activeLink) activeLink.classList.add('active');
      }
    });

    // sticky header
    const header = document.querySelector('header');
    if (header) header.classList.toggle('sticky', window.scrollY > 100);

    // remove mobile menu on scroll
    if (menuIcon) menuIcon.classList.remove('bx-x');
    if (navbar) navbar.classList.remove('active');
  });


  // ==================== scroll reveal ====================
  // Guard in case ScrollReveal isn't loaded
  if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    // Corrected selectors (note the dots for classes)
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
  }


  // ==================== typed js ====================
  if (typeof Typed !== 'undefined') {
    const typed = new Typed('.multiple-text', {
      strings: ['Full Stack Developer', 'YouTuber', 'Blogger'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });
  }


  // ==================== read more (about section) ====================
  const readmore = document.getElementById("readmore");
  const about_content = document.getElementById("about_content");

  window.changereadmore = function () { // keep global for inline onclick
    if (!readmore || !about_content) return;

    readmore.style.display = "none";

    // Append extra info (keeps original content)
    const moreHTML = `
      <p>
        <strong>Hobbies</strong> : Programming, Swimming, playing, Reading, Traveling and all. <br>
        <strong>Aim</strong> : FullStack Web Developer <br>
        <strong>Mobile</strong> : +91 9623480428 <br>
        <strong>Address</strong> : Maksood Colony, Roshan Gate, Aurangabad - 431001 
      </p>
    `;
    about_content.insertAdjacentHTML('beforeend', moreHTML);

    // Smooth visual effect
    about_content.style.transition = "all 0.8s ease";
    moreHTML.style.transition = "all 0.8s ease";
    about_content.style.opacity = "1";
  };


  // ==================== SHOW MORE PROJECTS ====================
  // This is the code that makes the Show More button work.

//   const projects = document.querySelectorAll(".portfolio-box");
//   const showMoreBtn = document.getElementById("showMoreBtn");

//   if (projects.length === 0) {
//     // nothing to do
//     if (showMoreBtn) showMoreBtn.style.display = 'none';
//     return;
//   }

//   // How many projects to show initially and per click
//   let visibleCount = 6;

//   // Update visibility of projects (keeps original display type)
//   function updateProjectVisibility() {
//     projects.forEach((project, index) => {
//       if (index < visibleCount) {
//         // show - remove inline display: none if present so CSS layout (grid/flex) works
//         project.style.display = '';
//       } else {
//         project.style.display = 'none';
//       }
//     });

//     // If all projects are visible, hide the button
//     if (visibleCount >= projects.length && showMoreBtn) {
//       showMoreBtn.style.display = 'none';
//     } else if (showMoreBtn) {
//       showMoreBtn.style.display = ''; // ensure visible
//     }
//   }

//   if (showMoreBtn) {
//     showMoreBtn.addEventListener('click', () => {
//       visibleCount += 6;
//       updateProjectVisibility();

//       // Optional: scroll to newly revealed items for better UX
//       // find first newly revealed element and scroll into view a little
//       const firstNewIndex = visibleCount - 6;
//       const firstNew = projects[firstNewIndex];
//       if (firstNew) {
//         firstNew.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       }
//     });
//   } else {
//     // If button is missing, log helpful hint (you can remove this in production)
//     console.warn('Show More button (id="showMoreBtn") not found in DOM.');
//   }

//   // Initial call to hide extras
//   updateProjectVisibility();

}); // DOMContentLoaded
