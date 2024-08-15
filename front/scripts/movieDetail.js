const axios = require('axios')

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');

    if (movieId) {
        try {
            await axios.get(`http://localhost:3000/get-movie/${movieId}`).then((response) => {
                const movie = response.data
                const movieDetails = document.getElementById('movie-details')
                document.getElementById('movie-title').innerText = movie.title;
                document.getElementById('movie-director').innerText = movie.director;
                document.getElementById('movie-genre').innerText = movie.genre.join(', ');
                document.getElementById('movie-year').innerText = movie.year;
                document.getElementById('movie-duration').innerText = movie.duration;
                document.getElementById('movie-rate').innerText = movie.rate;
                document.body.style.background = `url(${movie.poster}) no-repeat center center fixed`;
                document.body.style.backgroundSize = 'cover';
                document.body.style.backdropFilter = 'blur(10%)'
                       }).catch((err) => {
                console.log(err);

            })
        } catch (error) {

        }


    } else {
        console.error('No se proporcionó un ID de película.');
    }
});
