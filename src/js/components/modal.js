import { createElement } from '../helpers/create-element.helper.js';

const hideModal = () => {
  const modal = document.querySelector('#modal');
  modal.remove();
  // modal.innerHTML = '';
};

const showModal = (bodyElement) => {
  const modal = document.querySelector('#modal');
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

  window.addEventListener('click', (event) => {
    if (event.target !== modalContainer) {
      hideModal();
    }
  });

  console.log(modal);

  modalContainer.append(closeButton, bodyElement);
  modal.appendChild(modalContainer);
};

export { showModal };
