'use strict';


(function () {
  var menu = document.querySelector('.main-nav');


  if (menu) {
    var menuBtn = document.querySelector('.menu-btn');
    var menuBtnText = menuBtn.querySelector('.menu-btn__text');

    var menuLinks = menu.querySelectorAll('.main-nav__link');


    var toggleMenuBtnText = function () {
      menuBtnText.textContent = menuBtn.classList.contains('menu-btn--close') ?
        'Закрыть меню'
        :
        'Открыть меню';
    };

    var toggleMenu = function () {
      document.body.classList.toggle('page-body--no-scroll');
      menu.classList.toggle('main-nav--open');
      menuBtn.classList.toggle('menu-btn--close');

      toggleMenuBtnText();
    };


    var onMenuLinkClick = function () {
      if (menu.classList.contains('main-nav--open')) {
        toggleMenu();
      }
    };


    menu.classList.add('main-nav--js');
    menuBtn.classList.add('menu-btn--js');
    menuBtn.hidden = false;


    menuBtn.addEventListener('click', toggleMenu);

    menuLinks.forEach(function (link) {
      link.addEventListener('click', onMenuLinkClick);
    });
  }
})();
