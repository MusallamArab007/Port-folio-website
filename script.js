// ==================== toggle icon navbar ====================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// ==================== scroll section avtive link ====================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height)
        {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    // ==================== sticky navbar ====================
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // ==================== remove toggle icon and navbar when click navbar link (scroll) ====================
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// ==================== scroll reveal ====================
ScrollReveal({
    reset: true,
    distabce: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, about-img', {origin: 'left' });
ScrollReveal().reveal('.home-content p, about-content', {origin: 'right' });


// ==================== typed js ====================
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'YouTuber', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// ==================== own written js ====================

var readmore = document.getElementById("readmore");
var about_content = document.getElementById("about_content");
// readmore.addEventListener('click' = () => {
    // })
    
    function changereadmore(){
        readmore.style.display = "none";
        about_content.innerText = `Myself Musallam Khaled Basolan currently I am persuing 3rd yr in
        BE(CSE) from Everest College of Engineering, I have completed my 10th from saint Xavier's
        high school and 12th from sir sayyed clg. I have also completed some
        basic programming languages like diploma in c, c++, java
        secured A++ in that. Also I have a Good knowlegde of web designing
        I have also made some projects using HTML, CSS, JAVASCRIPT, Now I want to secure a good job in IT sector
        
        Hobies : Programming, Swimming, playing Football and Cricket, Reading books
        Aim : FullStack Web Developer
        Mobile : 9623480428
        Address : Maksood Colony, Roshan Gate, Aurangabad - 431001`;
        readmore.style.transition = ".8s";
        about_content.style.transition = ".8s";
}