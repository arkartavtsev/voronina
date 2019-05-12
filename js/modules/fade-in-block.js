'use strict';


(function () {
  var blocks = document.querySelectorAll('.fade-in-block');


  if (blocks.length) {
    var isBlockIntoView = function (block) {
      return block.getBoundingClientRect().top <= window.innerHeight;
    };

    var checkBlockVisibility = function (block) {
      if (isBlockIntoView(block) && !block.classList.contains('fade-in-block--visible')) {
        block.classList.add('fade-in-block--visible');
      }
    };


    blocks.forEach(function (block) {
      block.classList.add('fade-in-block--js');
    });


    document.addEventListener('DOMContentLoaded', function () {
      blocks.forEach(function (block) {
        checkBlockVisibility(block);
      });
    });

    window.addEventListener('scroll', function () {
      blocks.forEach(function (block) {
        checkBlockVisibility(block);
      });
    });
  }
})();