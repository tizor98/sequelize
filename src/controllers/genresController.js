const db = require("../database/models")

const error = err => console.log(err)

const controller = {

   list: async (req, res) => {

      const genres = await db.Genres.findAll().catch(error)
      
      res.render("genresList", {genres: genres})

   },

   detail: async (req, res) => {

      const genre = await db.Genres.findByPk(req.params.id).catch(error)

      res.render("genresDetail", {genre: genre})

   }

}

module.exports = controller