'use strict';


(function () {
  var asideBlocks = document.querySelectorAll('.page-body__aside-block');


  if (asideBlocks) {
    asideBlocks.forEach(function (block) {
      block.classList.add('page-body__aside-block--shown');
    });
  }
})();
