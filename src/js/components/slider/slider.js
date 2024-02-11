import { createSliderElement } from './helpers/create-slider-element.helper.js';

const createSlider = ({ selector, slides, options }) => {
  return createSliderElement({
    selector,
    slides,
    ...options,
  });
};

const createImageSlider = ({ pictures }) => {
  const imageSlides = Array.from(
    { length: 8 },
    () => `<img src="${pictures.base_link}">`,
  );
  return createSlider({
    selector: 'image-slider',
    slides: imageSlides,
    options: { hasNavigation: true },
  });
};

const createVideoSlider = ({ embed }) => {
  const videoSlides = Array.from({ length: 8 }, () => embed.html);
  return createSlider({
    selector: 'video-slider',
    slides: videoSlides,
    options: { hasPagination: true },
  });
};

export { createImageSlider, createVideoSlider };
