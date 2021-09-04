// Menu Functionality

const menuButton = document.querySelector('.header__nav__menu-button');
const menuButtonImage = menuButton.querySelector('img');
const introBlock = document.querySelector('.intro');
const menu = document.querySelector('.header__nav__menu');
let menuLinks = document.querySelectorAll('.header__nav__menu__link');

function openMenu() {
  menu.classList.add('open');
  introBlock.classList.add('open');
  menuButtonImage.src = 'images/icon-close.svg';
  menuButton.setAttribute('aria-expanded', 'true');
}

function hideMenu() {
  menu.classList.remove('open');
  introBlock.classList.remove('open');
  menuButtonImage.src = 'images/icon-hamburger.svg';
  menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', () => {
  if (menu.classList.contains('open')) {
    hideMenu();
  } else {
    openMenu();
  }
});

window.addEventListener('keyup', (event) => {
  if (event.key === 'Escape' && menu.classList.contains('open')) {
    hideMenu();
  }
});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('focusout', (event) => {
    if (event.relatedTarget.classList.contains('header__nav__menu__link')) {
      return;
    }
    hideMenu();
    menuButton.focus();
  });
});
