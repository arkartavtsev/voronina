'use strict';


(function () {
  var pageContainer = document.querySelector('.page-body__container');
  var asideBlocks = pageContainer.querySelectorAll('.page-body__aside-block');


  if (asideBlocks) {
    var HIDE_DISTANCE_THRESHOLD = 50;
    var CONTAINER_PADDING = 170;

    var leftBlockOverlappingSection = pageContainer.querySelector('.portfolio-details');
    var rightBlockOverlappingSection = pageContainer.querySelector('.intro');


    var isNeedToHide = function (block, overlappingSection) {
      return block.getBoundingClientRect().top <= overlappingSection.getBoundingClientRect().bottom + HIDE_DISTANCE_THRESHOLD && block.getBoundingClientRect().bottom >= overlappingSection.getBoundingClientRect().top - HIDE_DISTANCE_THRESHOLD;
    };

    var toggleAsideBlockVisibility = function (block, overlappingSection) {
      if (isNeedToHide(block, overlappingSection)) {
        block.classList.add('page-body__social-links--hidden');
      } else {
        block.classList.remove('page-body__social-links--hidden');
      }
    };

    var checkAsideBlocksVisibility = function () {
      toggleAsideBlockVisibility(asideBlocks[0], leftBlockOverlappingSection);
      toggleAsideBlockVisibility(asideBlocks[1], rightBlockOverlappingSection);
    };


    var assignBlocksCoordinats = function () {
      asideBlocks[0].style.left = pageContainer.getBoundingClientRect().left + 'px';

      asideBlocks[1].style.left = pageContainer.getBoundingClientRect().right - CONTAINER_PADDING + 'px';
    };


    asideBlocks.forEach(function (block) {
      block.classList.add('page-body__aside-block--shown');
    });

    checkAsideBlocksVisibility();
    assignBlocksCoordinats();


    window.addEventListener('scroll', checkAsideBlocksVisibility);
    window.addEventListener('resize', assignBlocksCoordinats);
  }
})();
