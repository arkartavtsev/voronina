'use strict';


(function () {
  var asideSocialLinks = document.querySelector('.page-body__social-links');


  if (asideSocialLinks) {
    var HIDE_DISTANCE_THRESHOLD = 50;

    var introSection = document.querySelector('.intro');


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
      toggleAsideBlockVisibility(asideSocialLinks, introSection);
    };


    checkAsideBlocksVisibility();


    window.addEventListener('scroll', checkAsideBlocksVisibility);
  }
})();