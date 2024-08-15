module.exports = function applyHoverEvents(divElement, hoverContainer, h2Title, durationElement, item) {
  divElement.addEventListener('mouseenter', () => {
    document.body.style.background = `url(${item.poster}) no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover';

    // Scale effect on hover
    divElement.style.transform = 'scale(1.1)';
    divElement.style.transition = 'transform 0.5s ease';

    // Ensure the hover container is on top and positioned on the left side
    hoverContainer.style.position = 'absolute';

    hoverContainer.style.zIndex = '1000000'; // Ensure it is above the divElement

    // Add content to the hover container
    h2Title.innerText = item.title;
    durationElement.innerText = item.genre[0];
    divElement.appendChild(hoverContainer);
  });

  divElement.addEventListener('mouseleave', () => {
    divElement.style.transform = 'scale(1)';
    if (divElement.contains(hoverContainer)) {
      divElement.removeChild(hoverContainer);
    }
  });

  hoverContainer.addEventListener('mouseenter', () => {
    divElement.style.transform = 'scale(1.1)';
    divElement.style.zIndex = '1000'; // Ensure divElement is above other elements
  });

  hoverContainer.addEventListener('mouseleave', () => {
    divElement.style.transform = 'scale(1)';
    if (divElement.contains(hoverContainer)) {
      divElement.removeChild(hoverContainer);
      divElement.style.zIndex = '1'; // Restore normal zIndex
    }
  });
}
