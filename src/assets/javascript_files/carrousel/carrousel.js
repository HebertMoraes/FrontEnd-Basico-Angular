window.addEventListener('load', (event) => {

  var carousel = document.querySelector('.carousel');
  var carouselContent = document.querySelector('.carousel-content');
  var slides = document.querySelectorAll('.slide');
  var arrayOfSlides = Array.prototype.slice.call(slides);
  var iconeFavorito = document.getElementsByClassName("iconeFavorito");
  var carouselDisplaying;
  setScreenSize();
  var lengthOfSlide;

  function addClone() {
    if (carouselContent !== null) {
      var lastSlide = carouselContent.lastElementChild.cloneNode(true);
      lastSlide.style.left = (-lengthOfSlide) + "px";
      carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
    }
  }

  function removeClone() {
    var firstSlide = carouselContent.firstElementChild;
    firstSlide.parentNode.removeChild(firstSlide);
  }

  function moveSlidesRight() {
    var slides = document.querySelectorAll('.slide');
    var slidesArray = Array.prototype.slice.call(slides);
    var width = 0;

    slidesArray.forEach(function (el, i) {
      el.style.left = width + "px";
      width += lengthOfSlide;
    });
    addClone();
  }
  moveSlidesRight();

  function moveSlidesLeft() {
    var slides = document.querySelectorAll('.slide');
    var slidesArray = Array.prototype.slice.call(slides);
    slidesArray = slidesArray.reverse();
    var maxWidth = (slidesArray.length - 1) * lengthOfSlide;

    slidesArray.forEach(function (el, i) {
      maxWidth -= lengthOfSlide;
      el.style.left = maxWidth + "px";
    });
  }

  window.addEventListener('resize', setScreenSize);

  function setScreenSize() {
    // if (window.innerWidth >= 500) {
    //   carouselDisplaying = 3;
    // } else if (window.innerWidth >= 425) {
    //   carouselDisplaying = 2;
    // } else {
    //   carouselDisplaying = 1;
    // }
    carouselDisplaying = 1;

    var slides = document.querySelectorAll('.slide');
    var slidesArray = Array.prototype.slice.call(slides);

    if (carousel !== null) {
      lengthOfSlide = (carousel.offsetWidth / carouselDisplaying);
      var initialWidth = -lengthOfSlide;
      slidesArray.forEach(function (el) {
        el.style.width = lengthOfSlide + "px";
        el.style.left = initialWidth + "px";
        initialWidth += lengthOfSlide;
      });
    }

  }

  var rightNav = document.querySelector('.nav-right');
  if (rightNav !== null) {
    rightNav.addEventListener('click', moveLeft);
  }

  var moving = true;
  function moveRight() {
    if (moving) {
      moving = false;
      var lastSlide = carouselContent.lastElementChild;
      lastSlide.parentNode.removeChild(lastSlide);
      carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
      removeClone();
      var firstSlide = carouselContent.firstElementChild;
      firstSlide.addEventListener('transitionend', activateAgain);
      moveSlidesRight();
    }
  }

  function activateAgain() {
    var firstSlide = carouselContent.firstElementChild;
    moving = true;
    firstSlide.removeEventListener('transitionend', activateAgain);
  }

  var leftNav = document.querySelector('.nav-left');
  if (leftNav !== null) {
    leftNav.addEventListener('click', moveRight);
  }
  // var moveLeftAgain = true;

  function moveLeft() {
    if (moving) {
      moving = false;
      removeClone();
      var firstSlide = carouselContent.firstElementChild;
      firstSlide.addEventListener('transitionend', replaceToEnd);
      moveSlidesLeft();
    }
  }

  function replaceToEnd() {
    var firstSlide = carouselContent.firstElementChild;
    firstSlide.parentNode.removeChild(firstSlide);
    carouselContent.appendChild(firstSlide);
    firstSlide.style.left = ((arrayOfSlides.length - 1) * lengthOfSlide) + "px";
    addClone();
    moving = true;
    firstSlide.removeEventListener('transitionend', replaceToEnd);
  }

  function favorito() {
    var icone = this;
    if (icone.classList.contains('favorito')) {
      icone.classList.remove('favorito');
    } else {
      icone.classList.add('favorito');
    }
  }

  for (var i = 0; i < iconeFavorito.length; i++) {
    iconeFavorito[i].addEventListener("click", favorito);
  }

  var countSlideCarrousel = 1;
  setInterval(automaticCarrousel, 2500);
  function automaticCarrousel() {
    countSlideCarrousel++;

    if (countSlideCarrousel > 4) {
      countSlideCarrousel = 1;
    }
    moveLeft();
  }

});
