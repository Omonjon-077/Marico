/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
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

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== LOADER ===============*/
document.addEventListener('DOMContentLoaded', function (eventObject) {
    $('.load').fadeIn();
})
window.addEventListener("load", function (eventObject) {
    $('.load').fadeOut("slow");

});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION  for BLOG page ===============*/
$(function () {
    if ($('.content').length) {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400,
            // reset: true,
        })
        
        sr.reveal('.content__data-subtitle')
        sr.reveal('.content__data-title', { delay: 500 })
        sr.reveal('.agree__description', { delay: 600 })
        sr.reveal('.footer__top-title, .footer__top-description', { delay: 800 })
        sr.reveal('.content__box, .footer__bottom-item', {interval: 100, origin: 'bottom'})
        sr.reveal('.reveal__btn', { delay: 1000, origin: 'bottom' })
        sr.reveal('.intro__description', { origin: 'left' })
        sr.reveal('.footer__top-logo', { origin: 'right' })
        sr.reveal('.footer__bottom-logo', { origin: 'top' })
        sr.reveal('.footer__bottom-copy', { origin: 'bottom' })
    }
})


/*=============== SCROLL REVEAL ANIMATION  for ABOUT page ===============*/
$(function () {
    if ($('.about').length) {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400,
            // reset: true,
        })

        sr.reveal('.about__logo, .team__data-subtitle')
        sr.reveal('.about__title, .team__data-title', { delay: 500 })
        sr.reveal('.about__subtitle', { delay: 600 })
        sr.reveal('.about__description, .footer__top-title, .footer__top-description', { delay: 800 })
        sr.reveal('.about__wrap-description', {interval: 100, origin: 'left'})
        sr.reveal('.reveal__btn', { delay: 1000, origin: 'bottom' })
        sr.reveal('.about__wrap-title', { origin: 'right' })
        sr.reveal('.team__box, .footer__bottom-item', { interval: 300, origin: 'top' })
        sr.reveal('.footer__bottom-logo', { origin: 'top' })
        sr.reveal('.footer__bottom-copy', { origin: 'bottom' })
    }
})

/*=============== SCROLL REVEAL ANIMATION  for PRICING page ===============*/
$(function () {
    if ($('.plan').length) {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400,
            // reset: true,
        })

        sr.reveal('.plan__data-subtitle')
        sr.reveal('.footer__top-title, .footer__top-description', { delay: 800 })
        sr.reveal('.plan__box', {interval: 100, origin: 'bottom'})
        sr.reveal('.reveal__btn', { delay: 1000, origin: 'bottom' })
        sr.reveal('.intro__description', { delay: 1100, origin: 'left' })
        sr.reveal('.footer__bottom-item', { interval: 300, origin: 'top' })
        sr.reveal('.footer__bottom-logo', { origin: 'top' })
        sr.reveal('.footer__bottom-copy', { origin: 'bottom' })
    }
})