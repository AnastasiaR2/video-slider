import { createElement } from '../helpers/create-element.helper.js';

const modal = document.querySelector('#modal');

const hideModal = () => {
  modal.classList.remove('modal-opened');
  modal.classList.add('modal-closed');
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
  modal.classList.remove('modal-closed');
  modal.classList.add('modal-opened');

  modal.appendChild(modalContainer);
};

export { showModal };
