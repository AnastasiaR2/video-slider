import { createElement } from '../../helpers/create-element.helper.js';
import { createSliderElement } from './helpers/create-slider-element.helper.js';

const createImageSlider = (videoData) => {
  const { pictures } = videoData;
  const imageSlides = [];
  for (let i = 0; i < 8; i++) {
    imageSlides.push(`<img src="${pictures.base_link}">`);
  }

  const imageSliderElement = createSliderElement({
    selector: 'image-slider',
    slides: imageSlides,
    hasNavigation: true,
  });

  return imageSliderElement;
};

const createVideoSlider = (videoData) => {
  const { embed } = videoData;

  const videoSlides = [];
  for (let i = 0; i < 8; i++) {
    videoSlides.push(`${embed.html}`);
  }

  const videoSliderElement = createSliderElement({
    selector: 'video-slider',
    slides: videoSlides,
    hasPagination: true,
  });

  return videoSliderElement;
};

// const createSlider = (videoData) => {
//   const { pictures, embed } = videoData;
//   const imageSlides = [];
//   for (let i = 0; i < 8; i++) {
//     imageSlides.push(`<img src="${pictures.base_link}">`);
//   }

//   const videoSlides = [];
//   for (let i = 0; i < 8; i++) {
//     videoSlides.push(`${embed.html}`);
//   }

//   const imageSliderElement = createSliderElement({
//     selector: 'image-slider',
//     slides: imageSlides,
//     hasNavigation: true,
//   });

//   const videoSliderElement = createSliderElement({
//     selector: 'video-slider',
//     slides: videoSlides,
//     hasPagination: true,
//   });

//   const sliderElement = createElement({
//     tagName: 'main',
//   });

//   sliderElement.appendChild(imageSliderElement);
//   sliderElement.appendChild(videoSliderElement);

//   return sliderElement;
// };

export { createImageSlider, createVideoSlider };
