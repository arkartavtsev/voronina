'use strict';


(function () {
  var portfolio = document.querySelector('.portfolio');


  if (portfolio) {
    var slider = portfolio.querySelector('.portfolio__samples-wrapper');
    var sliderTape = slider.querySelector('.portfolio__samples');

    var items = sliderTape.querySelectorAll('.portfolio__portfolio-item');
    var firstItem = items[0];
    var lastItem = items[items.length - 1];


    var Item = null;
    var Edge = null;

    var sliderTapePosition = 0;

    var windowWidth = document.documentElement.clientWidth;


    var isSliderNeeded = function () {
      return windowWidth < window.constants.resolution.TABLET
      &&
      items.length
      &&
      firstItem.offsetWidth * (items.length - 1) + lastItem.offsetWidth > slider.offsetWidth;
    };


    var defineSliderParams = function () {
      Item = {
        WIDTH: firstItem.offsetWidth,
        PADDING: parseFloat(getComputedStyle(firstItem).paddingRight)
      };

      Edge = {
        LEFT: slider.getBoundingClientRect().left,
        RIGHT: slider.getBoundingClientRect().right
      };

      sliderTapePosition = 0;
      sliderTape.style.transform = 'translateX(' + sliderTapePosition + 'px)';
    };


    var scrollSliderTape = function (offset) {
      sliderTapePosition += offset;

      sliderTape.style.transform = 'translateX(' + sliderTapePosition + 'px)';
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


    var onSliderTouchStart = function (startEvt) {
      var xStart = startEvt.touches[0].clientX;
      var yStart = startEvt.touches[0].clientY;

      var onSliderTouchMove = function (moveEvt) {
        if (!xStart || !yStart) {
          return;
        }

        var xMove = moveEvt.touches[0].clientX;
        var yMove = moveEvt.touches[0].clientY;

        var xDiff = xStart - xMove;
        var yDiff = yStart - yMove;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          if (Math.abs(yDiff) > 0) {
            moveEvt.preventDefault();
          }

          if (xDiff > 0) {
            showNextSlide();
          }

          if (xDiff < 0) {
            showPrevSlide();
          }
        }

        xStart = null;
        yStart = null;
      };

      var onSliderTouchEnd = function () {
        slider.removeEventListener('touchmove', onSliderTouchMove);
        slider.removeEventListener('touchend', onSliderTouchEnd);
      };

      slider.addEventListener('touchmove', onSliderTouchMove);
      slider.addEventListener('touchend', onSliderTouchEnd);
    };


    var onSliderMouseDown = function (downEvt) {
      downEvt.preventDefault();

      var xDown = downEvt.clientX;

      var onSliderMouseMove = function (moveEvt) {
        if (!xDown) {
          return;
        }

        var xMove = moveEvt.clientX;
        var xDiff = xDown - xMove;

        if (xDiff > 0) {
          showNextSlide();
        }

        if (xDiff < 0) {
          showPrevSlide();
        }

        if (xDiff) {
          xDown = null;
        }
      };

      var onSliderMouseUp = function () {
        slider.removeEventListener('mousemove', onSliderMouseMove);
        slider.removeEventListener('mouseup', onSliderMouseUp);
      };

      slider.addEventListener('mousemove', onSliderMouseMove);
      slider.addEventListener('mouseup', onSliderMouseUp);
    };


    var initializeSlider = function () {
      portfolio.classList.add('portfolio--with-slider');
      defineSliderParams();

      slider.addEventListener('touchstart', onSliderTouchStart);
      slider.addEventListener('mousedown', onSliderMouseDown);
    };

    var destroySlider = function () {
      portfolio.classList.remove('portfolio--with-slider');
      sliderTape.style.transform = '';

      slider.removeEventListener('touchstart', onSliderTouchStart);
      slider.removeEventListener('mousedown', onSliderMouseDown);
    };


    var onWindowResize = function () {
      if (windowWidth !== document.documentElement.clientWidth) {
        windowWidth = document.documentElement.clientWidth;

        destroySlider();

        if (isSliderNeeded()) {
          initializeSlider();
        }
      }
    };


    if (isSliderNeeded()) {
      initializeSlider();
    }


    window.addEventListener('resize', onWindowResize);
  }
})();
