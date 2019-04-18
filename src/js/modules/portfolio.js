'use strict';


(function () {
  var portfolio = document.querySelector('.portfolio');


  if (portfolio) {
    var itemsContainerWrapper = portfolio.querySelector('.portfolio__samples-wrapper');
    var itemsContainer = portfolio.querySelector('.portfolio__samples');

    var items = itemsContainer.querySelectorAll('.portfolio__portfolio-item');
    var firstItem = items[0];
    var lastItem = items[items.length - 1];


    var isSliderNeeded = function () {
      return items.length && firstItem.offsetWidth * (items.length - 1) + lastItem.offsetWidth > itemsContainerWrapper.offsetWidth;
    };


    if (isSliderNeeded()) {
      portfolio.classList.add('portfolio--js');


      var Item = null;
      var Edge = null;

      var windowWidth = null;

      var xDown = null;
      var yDown = null;


      var defineParams = function () {
        windowWidth = document.documentElement.clientWidth;

        Item = {
          WIDTH: firstItem.offsetWidth,
          PADDING: parseFloat(getComputedStyle(firstItem).paddingRight)
        };

        Edge = {
          LEFT: itemsContainerWrapper.getBoundingClientRect().left,
          RIGHT: itemsContainerWrapper.getBoundingClientRect().right
        };

        itemsContainer.style.left = 0;
      };


      var scrollSliderTape = function (offset) {
        var position = parseInt(getComputedStyle(itemsContainer).left, 10);

        position += offset;
        itemsContainer.style.left = position + 'px';
      };

      var showNextSlide = function () {
        var offset = lastItem.getBoundingClientRect().right - Edge.RIGHT >= Item.WIDTH ?
          -Item.WIDTH
          :
          Edge.RIGHT - lastItem.getBoundingClientRect().right - Item.PADDING;

        scrollSliderTape(offset);
      };

      var showPrevSlide = function () {
        var offset = Edge.LEFT - firstItem.getBoundingClientRect().left < Item.WIDTH ?
          Edge.LEFT - firstItem.getBoundingClientRect().left + Item.PADDING
          :
          Item.WIDTH;

        scrollSliderTape(offset);
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
            showNextSlide();
          }

          if (xDiff < 0) {
            showPrevSlide();
          }
        }

        xDown = null;
        yDown = null;
      };


      var onWindowResize = function () {
        if (windowWidth !== document.documentElement.clientWidth) {
          defineParams();
        }
      };


      defineParams();


      itemsContainerWrapper.addEventListener('touchstart', handleTouchStart);
      itemsContainerWrapper.addEventListener('touchmove', handleTouchMove);

      window.addEventListener('resize', onWindowResize);
    }
  }
})();
