const header = document.querySelector('.header')
const btnHamburger = document.querySelector('.header__toggle');
const navOverlay = document.querySelector('.nav__overlay');

btnHamburger.addEventListener('click', () => {
    if(btnHamburger.classList.contains('open')){
        btnHamburger.classList.remove("open");
        navOverlay.classList.add("fade-out");
        navOverlay.classList.remove('fade-in')
    } else{
        btnHamburger.classList.add("open");
        navOverlay.classList.add("fade-in");
        navOverlay.classList.remove("fade-out");
    }
})