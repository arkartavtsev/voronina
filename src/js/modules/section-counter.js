'use strict';


(function () {
  var sectionCounter = document.querySelector('.section-counter');


  if (sectionCounter) {
    var sections = document.querySelectorAll('.js-section');
    var currentSection;
    var currentSectionNotch;


    var isSectionIntoView = function (section) {
      return section.getBoundingClientRect().top < 0.8 * window.innerHeight && section.getBoundingClientRect().bottom > 0.2 * window.innerHeight;
    };

    var assignCurrentSection = function () {
      sections.forEach(function (section) {
        if (isSectionIntoView(section) && section !== currentSection) {
          currentSection = section;

          if (currentSectionNotch) {
            currentSectionNotch.classList.remove('section-counter__notch--current');
          }

          currentSectionNotch = sectionCounter.querySelector('a[href="#' + section.id + '"]');
          currentSectionNotch.classList.add('section-counter__notch--current');

          return;
        }
      });
    };


    assignCurrentSection();


    window.addEventListener('scroll', assignCurrentSection);
  }
})();
