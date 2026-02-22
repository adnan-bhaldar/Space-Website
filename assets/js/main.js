/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Show menu */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Hide menu */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== UPDATE YEAR ===============*/
document.getElementById("year").textContent = new Date().getFullYear();

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SWIPER PLANETS ===============*/
const swiperTravel = new Swiper('.travel__swiper', {
    loop: true,
    spaceBetween: '32',
    grabCursor: true,
    slidesPerView: "auto",
    centeredSlides: "auto",

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
    }
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // Add the .scroll-header class if the bottom scroll of the viewport is greater than 350
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

// Link the ID of each section (section id="home") to each link (a href="#home") 
// and activate the link with the class .active-link
const scrollActive = () => {
    // We get the position by scrolling down
    const scrollY = window.scrollY

    sections.forEach(section => {
        const id = section.id, // id of each section
            top = section.offsetTop - 50, // Distance from the top edge
            height = section.offsetHeight, // Element height
            link = document.querySelector('.nav__menu a[href*=' + id + ']') // id nav link

        if (!link) return

        link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    delay: 100,
    // reset: true, // Animation repeat
})

sr.reveal('.home__data, .travel__swiper, .contact__container')
sr.reveal('.home__img', { origin: 'bottom' })
sr.reveal('.home__ovni', { delay: 800 })
sr.reveal('.explore__img', { origin: 'left' })
sr.reveal('.explore__data', { origin: 'right' })
sr.reveal('.explore__planet', { origin: 'right', delay: 800 })
sr.reveal('.history__card', { interval: 100 })
sr.reveal('.history__planet-1', { origin: 'left', delay: 1000 })
sr.reveal('.history__planet-2', { origin: 'right', delay: 1200 })
sr.reveal('.footer__planet-1', { origin: 'bottom', delay: 600 })
sr.reveal('.footer__planet-2', { delay: 800 })
