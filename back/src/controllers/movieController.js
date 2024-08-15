const {getAllMovieService, getOneMovie, postMovieService, getComedy} = require("../services/movieService");
async function getAllMovies(req,res) 
{

    // promesas
    await getAllMovieService()
    .then((data) => {
        
        res.send(data).status(200)
    })
    .catch((reason) => {
        res.send(reason)
    })
    
}

async function getMovieById(req,res) 
{

    const params = req.params
    const movieId = params.id
  
    try {
        const promise = await getOneMovie(movieId)
        res.send(promise).status(200)
    } catch (error) {
        res.send(error)
    }

    
   
    
}

async function getMoviesComedy(req,res) {
    try {
        response = await getComedy()
        res.send(response)
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}
const createMovie = async (req, res) => {
    try {
        const { title, year, director, duration, genre, rate, poster } = req.body;
        
        // Convert genre string to an array by splitting at each comma and trimming whitespace
        const genreArray = genre.split(',').map(g => g.trim());

        // Create the movie object with the processed genre array
        const movie = {
            title,
            year,
            director,
            duration,
            genre: genreArray,
            rate,
            poster
        };

        console.log(movie);

        // Call the postMovieService with the processed movie object
        const response = await postMovieService(movie);
        res.status(200).send(response);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};
 

module.exports = {
    getAll: getAllMovies,
    getById:getMovieById,
    postMovie: createMovie,
    getComedy:getMoviesComedy
}