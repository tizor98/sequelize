const db = require("../database/models")
const Op = db.Sequelize.Op

const error = err => console.log(err)

const controller = {
   
   list: async (req, res) => {
      
      let movies = await db.Movies.findAll().catch(error)
      
      res.render("moviesList", {movies: movies})

   },

   detail: async (req, res) => {
      
      let movie = await db.Movies.findByPk(req.params.id).catch(error)

      res.render("moviesDetail", {movie: movie})

   },

   new: async (req, res) => {
      
      let movies = await db.Movies.findAll({
         where: {
            release_date: {[Op.gte]: "2008-01-01 00:00:00" }
         },
         order: [
            ["release_date", "DESC"]
         ]
      }).catch(error)

      res.render("newestMovies", {movies:movies})

   },

   recomended: async (req, res) => {

      let movies = await db.Movies.findAll({
         where: {
            rating: {[Op.gte]: 8 }
         },
         order: [
            ["rating", "DESC"]
         ],
         limit: 5
      }).catch(error)

      res.render("recommendedMovies", {movies:movies})

   }

}

module.exports = controller