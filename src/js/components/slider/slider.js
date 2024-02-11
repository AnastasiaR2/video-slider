import { createSliderElement } from './helpers/create-slider-element.helper.js';

const NUMBER_OF_SLIDES = 8;

const createSlider = ({ selector, slides, options }) => {
  return createSliderElement({
    selector,
    slides,
    ...options,
  });
};

const createImageSlider = ({ pictures }) => {
  const imageSlides = Array.from(
    { length: NUMBER_OF_SLIDES },
    () => `<img src="${pictures.base_link}">`,
  );
  return createSlider({
    selector: 'image-slider',
    slides: imageSlides,
    options: { hasNavigation: true },
  });
};

const createVideoSlider = ({ embed }) => {
  const videoSlides = Array.from(
    { length: NUMBER_OF_SLIDES },
    () => embed.html,
  );
  return createSlider({
    selector: 'video-slider',
    slides: videoSlides,
    options: { hasPagination: true },
  });
};

export { createImageSlider, createVideoSlider };
