const { default: clearForm } = require("./clearForm");
const validateInputs = require("./validateInput");
const axios = require('axios');

function formScript() {
    const form = document.querySelectorAll('.needs-validation')[0];

    function getInputs() {
        const title = document.getElementById('title');
        const year = document.getElementById('year');
        const director = document.getElementById('director');
        const duration = document.getElementById('duration');
        const genre = document.getElementById('genre');
        const rate = document.getElementById('rate');
        const poster = document.getElementById('poster');

        return { title, year, director, duration, genre, rate, poster };
    }

    function clear() {
        const inputs = getInputs();
        clearForm({ ...inputs });
    }

    function getMovie() {
        const { title, year, director, duration, genre, rate, poster } = getInputs();

        return {
            title: title.value,
            year: year.value,
            director: director.value,
            duration: duration.value,
            genre: genre.value,
            rate: rate.value,
            poster: poster.value
        };
    }

    document.getElementById('clear-button').addEventListener('click', () => clear());
    const buttonSubmit = document.getElementById('submit');
    const spinner = document.getElementById('spinner');
    const successAlert = document.getElementById('success-alert');
    const responseAlert = document.getElementById('response')
    buttonSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        spinner.classList.add('enabled');
        
        if (validateInputs(form)) {
            const movie = getMovie();
            console.log(movie);
            
            axios.post('http://localhost:3000/post-movie', movie)
                .then((response) => {
                    spinner.classList.remove('enabled');
                    
                    if (response.status === 200) { // Suponiendo que 200 es el código de éxito
                        successAlert.style.display = 'block'; // Mostrar la alerta
                        responseAlert.innerText = response.data
                    }
                })
                .catch((err) => {
                    console.log(err);
                    spinner.classList.remove('enabled');
                });
        }
    });
}

module.exports = formScript;
