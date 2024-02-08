import { createSlider } from './components/slider/slider.js';
import { fetchVideo } from './services/api.js';

const rootElement = document.querySelector('#root');

const renderApp = async () => {
  try {
    rootElement.innerText = 'Loading...';
    const videoData = await fetchVideo(824804225);
    const sliderElement = createSlider(videoData);
    rootElement.appendChild(sliderElement);
  } catch (error) {
    rootElement.innerText = 'Failed to load app';
    throw error;
  }
};

renderApp();
