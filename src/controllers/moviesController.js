const db = require("../database/models")
const Op = db.Sequelize.Op

const error = err => console.log(err)

const controller = {
   
   list: async (req, res) => {
      
      const movies = await db.Movies.findAll().catch(error)
      
      res.render("moviesList", {movies: movies})

   },

   detail: async (req, res) => {
      
      const movie = await db.Movies.findByPk(req.params.id).catch(error)

      res.render("moviesDetail", {movie: movie})

   },

   new: async (req, res) => {
      
      const movies = await db.Movies.findAll({
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

      const movies = await db.Movies.findAll({
         where: {
            rating: {[Op.gte]: 8 }
         },
         order: [
            ["rating", "DESC"]
         ],
         limit: 5
      }).catch(error)

      res.render("recommendedMovies", {movies:movies})

   },

   edit: async (req, res) => {

      try {
         
         const movie = await db.Movies.findByPk(req.params.id)
         res.render("moviesEdit", {Movie: movie})
         
      } catch (error) {
         console.log(error)
      }   

   },

   update: async (req, res) => {

      try {
         
         await db.Movies.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
         },{
            where: {id: req.params.id}
         })

         res.redirect('/movies')

      } catch (error) {
         console.log(error)
      }

   },

   delete: async (req, res) => {

      try {
         
         const movie = await db.Movies.findByPk(req.params.id)
         res.render('moviesDelete', {Movie: movie})

      } catch (error) {
         console.log(error)
      }

   },

   destroy: async (req, res) => {

      try {
         
         await db.Movies.destroy({
            where: {id: req.params.id}
         })

         res.redirect('/movies')

      } catch (error) {
         console.log(error)
      }

   },

   add: async (req, res) => {

      try {
         
         const movie = await db.Movies.findByPk(req.params.id)
         res.render('moviesAdd', {Movie: movie})

      } catch (error) {
         console.log(error)
      }

   },

   create: async (req, res) => {

      try {
         
         await db.Movies.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
         })

         res.redirect('/movies')

      } catch (error) {
         console.log(error)
      }

   }

}

module.exports = controller