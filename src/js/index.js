import { fetchVideo } from './services/api.js';

const rootElement = document.querySelector('#root');

const renderApp = async () => {
  try {
    rootElement.innerText = 'Loading...';
    const video = await fetchVideo(824804225);
    rootElement.innerHTML = `<img src="${video.pictures.base_link}">`;
  } catch (error) {
    rootElement.innerText = 'Failed to load app';
    throw error;
  }
};

renderApp();
