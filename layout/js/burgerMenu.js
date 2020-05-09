'use strict';
const burgerBtn = document.querySelector('#burger');
const mobileNav = document.querySelector('.mobile-nav');
const underlay = document.querySelector('#underlay');

burgerBtn.addEventListener('click', () => {
  toggleMobileMenu();
});

underlay.addEventListener('click', function (e) {
  if (e.target === this) {
    toggleMobileMenu();
  }
});

mobileNav.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    toggleMobileMenu();
  }
});

const toggleMobileMenu = () => {
  checkStripes();
  mobileNav.classList.toggle('invisible');
  underlay.classList.toggle('underlay');
  document.body.classList.toggle('hiddenY');
};

const checkStripes = () => {
  burgerBtn.children[0].classList.toggle('invisible');
  burgerBtn.children[1].classList.toggle('rotate45');
  burgerBtn.children[2].classList.toggle('rotate-45');
  burgerBtn.children[3].classList.toggle('invisible');
};
