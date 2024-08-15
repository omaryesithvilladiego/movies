const mongoose = require("mongoose");


//validaciones
// title: Verificar que sea una cadena no vacía.
// year: Validar que sea un número entero dentro del rango permitido.
// Director: Verificar que sea una cadena no vacía.
// duration: Validar que siga un formato como 2h 22min.
// genre: Asegurarse de que sea un array de cadenas no vacías.
// rate: Verificar que sea un número entre 0 y 10.
// Poster: Validar que sea una URL válida.




// Expresión regular para validar la duración en formato "2h 22min"
const durationRegex = /^(\d{1,2}h\s\d{1,2}min)$/;

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "El título es requerido"],
        minlength: [1, "El título no puede estar vacío"]
    },
    year: {
        type: Number,
        min: [1895, "El año no puede ser igual o menor a 1895"],
        max: [new Date().getFullYear() + 2, "El año no puede ser mayor al año actual más dos años"],
        required: [true, "El año es requerido"]
    },
    director: {
        type: String,
        required: [true, "El nombre del director es requerido"],
        minlength: [1, "El nombre del director no puede estar vacío"]
    },
    duration: {
        type: String,
        required: [true, "La duración es requerida"],
        validate: {
            validator: function(v) {
                return durationRegex.test(v);
            },
            message: "La duración debe estar en el formato '2h 22min'"
        }
    },
    genre: {
        type: [String],
        required: [true, "El género es requerido"],
        validate: {
            validator: function(v) {
                return v.length > 0 && v.every(genre => genre.trim().length > 0);
            },
            message: "Debe haber al menos un género y no puede estar vacío"
        }
    },
    rate: {
        type: Number,
        min: [0, "La calificación mínima es 0"],
        max: [10, "La calificación máxima es 10"],
        required: [true, "La calificación es requerida"]
    },
    poster: {
        type: String,
        required: [true, "La URL del poster es requerida"],
        validate: {
            validator: function(v) {
                return /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(v);
            },
            message: "La URL del poster debe ser válida"
        }
    }
});


module.exports = movieSchema;
