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

    const imageSlider = new ImageSlider('.image-slider');
    imageSlider.init();

    const videoSlider = new VideoSlider('.video-slider');
    videoSlider.init();
  } catch (error) {
    rootElement.innerText = 'Failed to load app';
    throw error;
  }
};

renderApp();
