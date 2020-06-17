'use strict';

const menu = document.querySelector('.menu');
const button = document.querySelector('.header__menu');
const buttonToClose = document.querySelector('.menu__close');
const menuLink = document.querySelectorAll('.menu__link');

const closeMenu = () => {
  menu.classList.remove('menu__show');
};

button.addEventListener('click', () => {
  menu.classList.add('menu__show');
});

buttonToClose.addEventListener('click', closeMenu);

menuLink.forEach(link => {
  link.addEventListener('click', closeMenu);
});
