class Movie {
    constructor(id,title,year,director,genre) {
        this.id = id++,
        this.title = title,
        this.year = year,
        this.director  = director,
        this.genre = genre
    }


}

module.exports = Movie