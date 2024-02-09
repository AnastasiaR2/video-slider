import { createElement } from '../../helpers/create-element.helper.js';
import { createSliderElement } from './helpers/create-slider-element.helper.js';

const createSlider = (videoData) => {
  const { pictures, embed } = videoData;
  // const imageSlides = [];
  // for (let i = 0; i < 8; i++) {
  //   imageSlides.push(`<img src="${pictures.base_link}">`);
  // }

  const videoSlides = [];
  for (let i = 0; i < 8; i++) {
    videoSlides.push(`${embed.html}`);
  }

  // const imageSliderElement = createSliderElement({
  //   selector: 'image-slider',
  //   slides: imageSlides,
  //   hasNavigation: true,
  //   hasPagination: true,
  // });

  const videoSliderElement = createSliderElement({
    selector: 'video-slider',
    slides: videoSlides,
    hasPagination: true,
  });

  const sliderElement = createElement({
    tagName: 'main',
  });

  sliderElement.appendChild(videoSliderElement);
  // sliderElement.appendChild(videoSliderElement);

  return sliderElement;
};

export { createSlider };
