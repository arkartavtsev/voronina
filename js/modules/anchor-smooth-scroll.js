'use strict';


(function () {
  var links = document.querySelectorAll('a[href^="#"]');

  if (links.length) {
    var onLinkClick = function (evt, link) {
      evt.preventDefault();

      var elementID = link.getAttribute('href');
      var element = document.querySelector(elementID);

      element.scrollIntoView({
        behavior: 'smooth'
      });
    };


    links.forEach(function (link) {
      link.addEventListener('click', function (evt) {
        onLinkClick(evt, link);
      });
    });
  }
})();