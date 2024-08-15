const mongoose = require("mongoose")
const movieSchema = require("../schemas/movie.schema")


const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie