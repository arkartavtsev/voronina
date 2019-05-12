'use strict';


(function () {
  var links = document.querySelectorAll('a[href^="#"]');

  if (links.length) {
    var SCROLL_DURATION = 300;
    var FRAMES_COUNT = 60;

    var smoothScrollTo = function (element) {
      var start = window.pageYOffset;
      var stop = start + element.getBoundingClientRect().top;
      var newPosition = start;

      var distance = Math.abs(start - stop);

      var step = Math.round(distance / FRAMES_COUNT);
      if (start > stop) {
        step = -step;
      }


      var scroller = setInterval(function () {
        newPosition += step;
        if (Math.abs(start - newPosition) >= distance) {
          newPosition = stop;
        }

        window.scrollTo(0, newPosition);

        if (newPosition === stop) {
          clearInterval(scroller);
        }
      }, SCROLL_DURATION / FRAMES_COUNT);
    };


    var onLinkClick = function (evt, link) {
      evt.preventDefault();

      var elementID = link.getAttribute('href');
      var element = document.querySelector(elementID);

      smoothScrollTo(element);
    };


    links.forEach(function (link) {
      link.addEventListener('click', function (evt) {
        onLinkClick(evt, link);
      });
    });
  }
})();