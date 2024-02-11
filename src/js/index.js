import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import { showModal } from './components/modal.js';
import {
  createImageSlider,
  createVideoSlider,
} from './components/slider/slider.js';
import { fetchVideo } from './services/api.js';

const rootElement = document.querySelector('#root');

const renderApp = async () => {
  try {
    const videoData = await fetchVideo(824804225);
    const imageSliderElement = createImageSlider(videoData);
    const videoSliderElement = createVideoSlider(videoData);

    rootElement.appendChild(imageSliderElement);

    const imageSlider = new Swiper('.image-slider', {
      modules: [Navigation],
      slidesPerView: 4,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    imageSlider.on('click', () => {
      const clickedSlideIndex = imageSlider.clickedIndex;
      console.log('Clicked slide index:', clickedSlideIndex);
      showModal(videoSliderElement);
      new Swiper('.video-slider', {
        initialSlide: clickedSlideIndex,
        modules: [Pagination],
        pagination: {
          clickable: true,
          el: '.swiper-pagination',
        },
      });
    });
  } catch (error) {
    rootElement.innerText = 'Failed to load app';
    throw error;
  }
};

renderApp();
