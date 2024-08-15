const applyButtonEvent = require('./applyButtonEvent');
const applyHoverEvents = require('./applyHoverEvents');

module.exports = function buildMovie(item) {
    const li = document.createElement('li');
    const divElement = document.createElement('div');
  
    // Add styles to the elements
    li.className = 'glide__slide slide-li-container';
    divElement.className = 'slide-global';
    divElement.style.background = `url(${item.poster})`;
    divElement.style.backgroundSize = 'cover';
    divElement.style.backgroundPosition = 'center';
    divElement.style.backgroundRepeat = 'no-repeat';
  
    // Add content to the hover element
    divElement.title = item.title;
    divElement.genre = item.genre[0];
  
    // Create card elements
    const h2Title = document.createElement('h2');
    const durationElement = document.createElement('p');
    const hoverContainer = document.createElement('div');
    const viewMoreButton = document.createElement('button');
  
    h2Title.classList.add('title-styles');
    durationElement.classList.add('genre-style');
    viewMoreButton.classList.add('button-styles');
    hoverContainer.classList.add('container-info-home');
    viewMoreButton.innerHTML = 'View More';

  
    // Add elements to their respective parent
    hoverContainer.appendChild(h2Title);
    hoverContainer.appendChild(durationElement);
    hoverContainer.appendChild(viewMoreButton);
    li.appendChild(divElement);
  
    // Apply events to the card
    applyHoverEvents(divElement, hoverContainer, h2Title, durationElement, item);
    applyButtonEvent(viewMoreButton, item);
  
    return li;
}
