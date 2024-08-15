const axios = require("axios")
const Movie = require("../models/movie.model")

const getAllMovieService = async (req,res) => {

    try {
        const movies = await Movie.find({})
        
        return movies
    } catch (error) {
        throw error
        
    }
    
}


const getMovieById = async (movieId) => {

try {
    const response = Movie.findById({_id:movieId})
    return response
} catch (error) {
    throw error
}
    
}


async function postMovieService(movie) {
    try {
        const newMovie = new Movie(movie)
        const res = await newMovie.save()
        return "La pelicula se subio correctamente"
    } catch (error) {
        throw new Error(error)
    }
    
}

async function getMoviesComedy() {
    try {
      // Buscamos las películas donde el arreglo 'genre' incluye 'Comedy' en alguna posición
      const movies = await Movie.find({ genre: { $in: ['Comedy'] } });
  
      return movies;
    } catch (error) {
      console.error('Error al obtener las películas de comedia:', error);
      throw error;
    }
  }

module.exports = {
    getAllMovieService: getAllMovieService,
    getOneMovie: getMovieById,
    postMovieService: postMovieService,
    getComedy: getMoviesComedy
}