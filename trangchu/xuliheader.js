// HAMBURGER HEADER
const hamburger = document.querySelector('.header__hamburger');
const menu = document.querySelector('.header__menu');

hamburger.onclick = () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active'); 
};