// middleware/validateMovieData.js
const validateMovieData = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;

    if (!title || !year || !director || !duration || !genre || !poster) {
        return res.status(400).json({ error: "Todos los campos requeridos deben estar presentes" });
    }


    next();
};

module.exports = validateMovieData;
