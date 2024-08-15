const buildAllMovies = require('./buildAllMovies')

module.exports = function addItemsToGlide(items) {
    const glideSlides = document.getElementById('glide__slides__first');
  
    if (!glideSlides) {
      console.error('No se encontró el elemento .glide__slides');
      return;
    }
  
    buildAllMovies(items, glideSlides);
  };