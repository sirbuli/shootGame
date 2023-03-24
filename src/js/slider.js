class Slider {
  slides = document.querySelectorAll('.slide');
  dots = document.querySelector('.dots');
  curSlide = 0;
  maxSlide = this.slides.length;

  constructor() {
    this.bindEvents();
    this.init();
  }

  bindEvents() {
    document.addEventListener('keydown', this.handleKey);
    this.dots.addEventListener('click', this.handleDot);
  }

  handleDot = (e) => {
    if (e.target.classList.contains('dots__dot')) {
      const slide = e.target.dataset.slide;
      this.goToSlide(slide);
      this.activateDot(slide);
    }
  };

  handleKey = (e) => {
    e.key === 'ArrowLeft' && this.prevSlide();
    e.key === 'ArrowRight' && this.nextSlide();
  };

  createDots() {
    this.slides.forEach((_, i) => {
      this.dots.insertAdjacentHTML(
        'beforeend',
        `<button class='dots__dot' data-slide='${i}'></button>`
      );
    });
  }

  activateDot(slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach((dot) => dot.classList.remove('dots__dot__active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot__active');
  }

  goToSlide = function (slide) {
    this.slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  nextSlide() {
    if (this.curSlide === this.maxSlide - 1) {
      this.curSlide = 0;
    } else {
      this.curSlide++;
    }
    this.goToSlide(this.curSlide);
    this.activateDot(this.curSlide);
  }

  prevSlide() {
    if (this.curSlide === 0) {
      this.curSlide = this.maxSlide - 1;
    } else {
      this.curSlide--;
    }

    this.goToSlide(this.curSlide);
    this.activateDot(this.curSlide);
  }

  init() {
    this.goToSlide(0);
    this.createDots();
    this.activateDot(0);
  }
}
export default Slider;
