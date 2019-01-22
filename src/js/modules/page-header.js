'use strict';


(function () {
  if (window.innerWidth < window.constants.resolution.DESKTOP) {
    var header = document.querySelector('.page-header');


    if (header) {
      var headerBar = header.querySelector('.page-header__bar');

      headerBar.classList.add('page-header__bar--js');
    }
  }
})();
