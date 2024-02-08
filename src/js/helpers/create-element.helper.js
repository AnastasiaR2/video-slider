const createElement = ({
  tagName, 
  className, 
  attributes = {},
  content = '',
}) => {
  const element = document.createElement(tagName);

  if (className) {
    const classNames = className.split(' ').filter(Boolean);
    element.classList.add(...classNames);
  }

  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));

  if (content) {
      element.innerHTML = content;
  }

    return element;
};

export { createElement };