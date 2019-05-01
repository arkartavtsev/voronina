'use strict';


(function () {
  var menu = document.querySelector('.main-nav');


  if (menu) {
    var ItemsTransitionDelay = {
      INITIAL: 0.8,
      STEP: 0.2
    };

    var menuBtn = document.querySelector('.menu-btn');
    var menuBtnText = menuBtn.querySelector('.menu-btn__text');

    var menuItems = menu.querySelectorAll('.main-nav__item');
    var menuLinks = menu.querySelectorAll('.main-nav__link');


    var toggleItemsTransitionDelay = function () {
      if (menu.classList.contains('main-nav--open')) {
        menuItems.forEach(function (item, i) {
          item.style.transitionDelay = (ItemsTransitionDelay.INITIAL + i * ItemsTransitionDelay.STEP) + 's';
        });

        return;
      }

      menuItems.forEach(function (item) {
        item.style.transitionDelay = '';
      });
    };

    var toggleMenuBtnText = function () {
      menuBtnText.textContent = menuBtn.classList.contains('menu-btn--close') ?
        'Закрыть меню'
        :
        'Открыть меню';
    };


    var toggleMenu = function () {
      menu.style.transitionDuration = '';

      document.body.classList.toggle('page-body--no-scroll');
      menu.classList.toggle('main-nav--open');
      menuBtn.classList.toggle('menu-btn--close');

      toggleItemsTransitionDelay();
      toggleMenuBtnText();
    };


    var onMenuLinkClick = function () {
      if (menu.classList.contains('main-nav--open')) {
        toggleMenu();
        menu.style.transitionDuration = '0s';
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
