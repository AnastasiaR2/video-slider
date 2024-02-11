import { createElement } from '../helpers/create-element.helper.js';

const modal = document.querySelector('#modal');

const hideModal = () => {
  modal.classList.remove('modal-opened');
  modal.innerHTML = '';
};

const createModal = (bodyElement) => {
  const modalContainer = createElement({
    tagName: 'div',
    className: 'modal-container',
  });
  const closeButton = createElement({
    tagName: 'button',
    className: 'close-btn',
    content: 'X',
    attributes: {
      'aria-label': 'Close modal',
    },
  });

  closeButton.addEventListener('click', hideModal);

  document.addEventListener('click', (event) => {
    if (event.target === modalContainer) {
      hideModal();
    }
  });

  modalContainer.append(closeButton, bodyElement);

  return modalContainer;
};

const showModal = (bodyElement) => {
  const modalContainer = createModal(bodyElement);
  modal.classList.add('modal-opened');

  modal.appendChild(modalContainer);
};

export { showModal };
