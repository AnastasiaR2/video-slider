import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import { createSlider } from './components/slider/slider.js';
import {
  ImageSlider,
  VideoSlider,
} from './components/slider/slider-settings.js';
import { fetchVideo } from './services/api.js';

const rootElement = document.querySelector('#root');

const renderApp = async () => {
  try {
    const videoData = await fetchVideo(824804225);
    const sliderElement = createSlider(videoData);

    rootElement.appendChild(sliderElement);

    // const imageSlider = new Swiper('.image-slider', {
    //   modules: [Navigation],
    //   slidesPerView: 4,
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    // });

    // console.log(imageSlider);

    // imageSlider.on('click', () => {
    //   const clickedSlideIndex = imageSlider.clickedIndex;
    //   console.log('Clicked slide index:', clickedSlideIndex);
    // });

    const videoSlider = new Swiper('.video-slider', {
      modules: [Pagination],
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
      },
    });
    console.log(videoSlider);
  } catch (error) {
    rootElement.innerText = 'Failed to load app';
    throw error;
  }
};

renderApp();
