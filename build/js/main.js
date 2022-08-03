// import {iosVhFix} from './utils/ios-vh-fix';
// import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // iosVhFix();

  const navMain = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.page-header__toggle');
  const navLogo = document.querySelector('.page-header__logo');
  const pageBody = document.querySelector('.page-body');
  const navLink = document.querySelectorAll('.main-nav__link');
  const navLinkList = Array.prototype.slice.call(navLink);
  const navOverley = document.querySelector('.main-nav__bg');

  navMain.classList.remove('main-nav--nojs');
  navMain.classList.add('main-nav--closed');
  navToggle.classList.remove('page-header__toggle--closed');
  navToggle.classList.add('page-header__toggle--opened');

  navToggle.addEventListener('click', () => {
    if (navToggle.classList.contains('page-header__toggle--closed')) {
      navToggle.classList.remove('page-header__toggle--closed');
      navToggle.classList.add('page-header__toggle--opened');
      navLogo.classList.remove('page-header__logo--active');
      pageBody.classList.remove('scroll-lock-ios');
    } else {
      navToggle.classList.add('page-header__toggle--closed');
      navToggle.classList.remove('page-header__toggle--opened');
      pageBody.classList.add('scroll-lock-ios');
    }
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      navLogo.classList.add('page-header__logo--active');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

  navLinkList.forEach((element) => {
    element.addEventListener('click', () => {
      if (navMain.classList.contains('main-nav--opened')) {
        navMain.classList.remove('main-nav--opened');
        navMain.classList.add('main-nav--closed');
        navToggle.classList.remove('page-header__toggle--closed');
        navToggle.classList.add('page-header__toggle--opened');
        pageBody.classList.remove('scroll-lock-ios');
        navLogo.classList.remove('page-header__logo--active');
      }
    });
  });

  navOverley.addEventListener('click', () => {
    if (navMain.classList.contains('main-nav--opened')) {
      navMain.classList.remove('main-nav--opened');
      navMain.classList.add('main-nav--closed');
      navToggle.classList.remove('page-header__toggle--closed');
      navToggle.classList.add('page-header__toggle--opened');
      pageBody.classList.remove('scroll-lock-ios');
      navLogo.classList.remove('page-header__logo--active');
    }
  });

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    // initModals();
  });
});
// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
