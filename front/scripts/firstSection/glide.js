const applyHoverEvents = require("./applyHoverEvents");

module.exports = function glideConfig(slidesLength) {
  var glide = new Glide('.glide', {
    type: 'slider',
    autoplay: 3000,
    perView: slidesLength >= 5 ? 5 : slidesLength,
    breakpoints: {
      1200: { perView: 3 },
      768: { perView: 2 },
      480: { perView: 1 }
    },
    rewind: true,
    bound: true
  });

  glide.destroy();

  glide.on('move.after', () => {
    const slides = document.querySelectorAll('.glide__slide');
    const glideWidth = document.querySelector('.glide__track').offsetWidth;
    const centerPosition = glideWidth / 2;

    slides.forEach((slide, index) => {
      const slideRect = slide.getBoundingClientRect();
      const slideCenter = slideRect.left + slideRect.width / 2;
      const distanceFromCenter = Math.abs(centerPosition - slideCenter);
      
      let scale = 1 - (distanceFromCenter / centerPosition) * 0.5;
      scale = Math.max(scale, 0.8);
      
      slide.style.transform = `scale(${scale})`;
      slide.style.transition = 'transform 0.3s ease';

      // Add hover events to bring the hovered slide above others
      slide.addEventListener('mouseenter', () => {
        slides.forEach(s => s.style.zIndex = 0); // Reset zIndex of all slides
        slide.style.zIndex = 9999; // Bring hovered slide to the front
      });

      slide.addEventListener('mouseleave', () => {
        slides.forEach((s, i) => {
          s.style.zIndex = 400000 + i; // Restore original z-index based on index
        });
      });
    });
  });

  glide.mount();
}
