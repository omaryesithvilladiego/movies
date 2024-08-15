module.exports = function applyButtonEvent(button, item) {
    button.addEventListener('click', () => {
      window.location.href = `pages/detail/movieDetail.html?id=${item._id}`;
    });
  }

