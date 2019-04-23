'use strict';


(function () {
  var pageContainer = document.querySelector('.page-body__container');
  var asideBlocks = pageContainer.querySelectorAll('.page-body__aside-block');


  if (asideBlocks.length) {
    var CONTAINER_PADDING = 170;


    var leftBlock = asideBlocks[0];
    var rightBlock = asideBlocks[1];


    var assignBlocksCoordinates = function () {
      leftBlock.style.left = pageContainer.getBoundingClientRect().left + 'px';

      rightBlock.style.left = pageContainer.getBoundingClientRect().right - CONTAINER_PADDING + 'px';
    };


    assignBlocksCoordinates();

    asideBlocks.forEach(function (block) {
      block.classList.add('page-body__aside-block--js');
    });


    window.addEventListener('resize', assignBlocksCoordinates);
  }
})();