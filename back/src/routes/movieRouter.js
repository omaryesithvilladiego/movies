// forma de exportar express y router

const{getAll, getById, postMovie, getComedy} = require("../controllers/movieController")
const validateMovieData = require("../middlewares/movie.midleware")

// primera forma
const router = require("express").Router()

// segunda forma
// const express = require("express")
// const router = express.Router()

// tercera forma
// const { Router } = require("express")
// const router = Router()


router.get('/movies', getAll)
router.get('/get-movie/:id', getById)
router.post('/post-movie',validateMovieData, postMovie)
router.get('/get-comedy', getComedy)


module.exports = router