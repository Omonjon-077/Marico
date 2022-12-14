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
onload = () => {
    const load = document.getElementById('load')

    setTimeout(() => {
        load.style.display = 'none'
    }, 2500)
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
/* const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive) */

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, 
  })
  
  sr.reveal('.intro__subtitle, .intro__title, .creators__subtitle, .step__subtitle')
  sr.reveal('.intro__description, .step__title, .step__two-title', {delay: 500})
  sr.reveal('.intro__wrap-subtitle, .step__description, .step__two-subtitle', {delay: 600})
  sr.reveal('.intro__wrap-buttons, .agree__title', {delay: 800})
  sr.reveal('.creators__wrap-box', {delay: 9000, interval: 100, origin: 'bottom'})
  sr.reveal('.reveal__btn', {delay: 1000, origin: 'bottom'})
  sr.reveal('.spot__left', {origin: 'left'})
  sr.reveal('.spot__right', {origin: 'right'})
  sr.reveal('.step__two-description, .step__two-button', {delay: 600, origin: 'bottom'})
  sr.reveal('.step__two-box', {interval: 300})
  sr.reveal('.featured__card, .logos__content, .footer__content', {interval: 100})
