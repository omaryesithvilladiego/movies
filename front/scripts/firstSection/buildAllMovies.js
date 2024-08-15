const buildMovie = require('./buildMovie')

module.exports = function buildAllMovies(items, glideSlides) {
    items.forEach(item => {
      const movieElement = buildMovie(item);
      glideSlides.appendChild(movieElement);
    });
  }