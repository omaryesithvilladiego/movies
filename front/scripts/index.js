const getDataMovies = require('./getData.js');
const formScript = require("./form/form.js"); // Cargar el script de manera estática


if (window.location.pathname.includes('addMovie')) {
    formScript(); // Ejecutar el script cuando sea necesario
    
}
if (window.location.pathname === '/' ||  window.location.pathname === '/index.html') {
   document.addEventListener('DOMContentLoaded', () => {
    getDataMovies()
    .then((response) => {
        // Cargar módulos de glide solo después de obtener datos
        
        const addItemsToGlide = require('./firstSection/addItemsToGlide');
        const glideConfig = require('./firstSection/glide');

        addItemsToGlide(response);
        glideConfig(response.length);
    })
    .catch((err) => {
        console.error("Error al obtener datos de las películas:", err);
    });
   })
       
    
  
}
if(window.location.pathname.includes('movieDetail')) {
    require('./movieDetail.js')
}
if(window.location.pathname.includes('moviesCategories')) {
    require('./getComedy.js')
}
