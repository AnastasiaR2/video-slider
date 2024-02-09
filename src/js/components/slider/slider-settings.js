import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

class BaseSlider {
  constructor(selector, options) {
    this.selector = selector;
    this.options = options;
  }

  initialize() {
    return new Swiper(this.selector, {
      loop: true,
      simulateTouch: false,
      ...this.options,
    });
  }
}

class ImageSlider extends BaseSlider {
  constructor(selector) {
    super(selector, {
      modules: [Navigation],
      slidesPerView: 4,
      slidesPerGroup: 4,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}

class VideoSlider extends BaseSlider {
  constructor(selector) {
    super(selector, {
      modules: [Pagination],
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
      },
    });
  }
}

export { ImageSlider, VideoSlider };
