import Slider from './slider.js';

class App {
  constructor() {
    this.slider = new Slider();
    this.autoSlider();
  }

  autoSlider() {
    setInterval(() => {
      this.slider.nextSlide();
    }, 4000);
  }
}

export default App;
