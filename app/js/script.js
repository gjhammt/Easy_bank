const header = document.querySelector('.header')
const btnHamburger = document.querySelector('.header__toggle');
const navOverlay = document.querySelector('.nav__overlay');
const faddingElems = document.querySelectorAll('.has-fade')

btnHamburger.addEventListener('click', () => {
    if(header.classList.contains('open')){

        header.classList.remove("open");
        faddingElems.forEach((elm) => {
            elm.classList.add("fade-out");
            elm.classList.remove("fade-in");
        })
        // navOverlay.classList.add("fade-out");
        // navOverlay.classList.remove('fade-in')
    } else{
        header.classList.add("open");
        faddingElems.forEach((elm) => {
            elm.classList.add("fade-in");
            elm.classList.remove("fade-out");
        })
    }
})