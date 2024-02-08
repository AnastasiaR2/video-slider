import { createElement } from '../../../helpers/create-element.helper.js';

const createSliderElement = ({
  selector,
  slides,
  hasPagination = false,
  hasNavigation = false,
}) => {
  const sliderContainer = createElement({
    tagName: 'div',
    className: `swiper ${selector}`,
  });
  const sliderWrapper = createElement({
    tagName: 'div',
    className: 'swiper-wrapper',
  });

  slides.forEach((slideContent) => {
    const slide = createElement({
      tagName: 'div',
      className: 'swiper-slide',
      content: slideContent,
    });
    sliderWrapper.appendChild(slide);
  });

  sliderContainer.appendChild(sliderWrapper);

  if (hasPagination) {
    const sliderPagination = createElement({
      tagName: 'div',
      className: 'swiper-pagination',
    });
    sliderContainer.appendChild(sliderPagination);
  }

  if (hasNavigation) {
    const sliderNavigationPrev = createElement({
      tagName: 'div',
      className: 'swiper-button-prev',
    });
    const sliderNavigationNext = createElement({
      tagName: 'div',
      className: 'swiper-button-next',
    });
    sliderContainer.appendChild(sliderNavigationPrev);
    sliderContainer.appendChild(sliderNavigationNext);
  }

  return sliderContainer;
};

export { createSliderElement };
