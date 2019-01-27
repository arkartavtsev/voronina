'use strict';


(function () {
  var portfolio = document.querySelector('.portfolio');


  if (portfolio) {
    portfolio.classList.add('portfolio--js');

    var itemsContainerWrapper = portfolio.querySelector('.portfolio__samples-wrapper');
    var itemsContainer = portfolio.querySelector('.portfolio__samples');
    var items = itemsContainer.querySelectorAll('.portfolio__portfolio-item');

    var itemWidth = items[0].offsetWidth;


    var swipeLeft = function () {
      var offset = items[items.length - 1].getBoundingClientRect().right - itemsContainerWrapper.getBoundingClientRect().right >= itemWidth ? itemWidth : items[items.length - 1].getBoundingClientRect().right + parseFloat(getComputedStyle(itemsContainer).paddingRight) - itemsContainerWrapper.getBoundingClientRect().right;

      var position = parseInt(getComputedStyle(itemsContainer).left, 10);

      position -= offset;

      itemsContainer.style.left = position + 'px';
    };

    var swipeRight = function () {
      var offset = itemsContainerWrapper.getBoundingClientRect().left - items[0].getBoundingClientRect().left < itemWidth ? itemsContainerWrapper.getBoundingClientRect().left - items[0].getBoundingClientRect().left + parseFloat(getComputedStyle(itemsContainer).paddingLeft) : itemWidth;

      var position = parseInt(getComputedStyle(itemsContainer).left, 10);

      position += offset;

      itemsContainer.style.left = position + 'px';
    };


    var handleTouchStart = function (evt) {
      xDown = evt.touches[0].clientX;
      yDown = evt.touches[0].clientY;
    };

    var handleTouchMove = function (evt) {
      if (!xDown || !yDown) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (Math.abs(yDiff) > 0) {
          evt.preventDefault();
        }

        if (xDiff > 0) {
          swipeLeft();
        }

        if (xDiff < 0) {
          swipeRight();
        }
      }

      xDown = null;
      yDown = null;
    };


    itemsContainerWrapper.addEventListener('touchstart', handleTouchStart);
    itemsContainerWrapper.addEventListener('touchmove', handleTouchMove);


    var xDown = null;
    var yDown = null;
  }
})();
