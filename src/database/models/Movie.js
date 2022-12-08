module.exports = (sequelize, DataTypes) => {

   const alias = "Movies"

   const cols = {
      id: {
         type: DataTypes.INTEGER(10),
         autoIncrement: true,
         primaryKey: true
      },
      title: {
         type: DataTypes.STRING(500),
         allowNull: true
      },
      rating: {
         type: DataTypes.DECIMAL(3,1),
         allowNull: true
      },
      awards: {
         type: DataTypes.INTEGER(10),
         allowNull: true
      },
      release_date: {
         type: DataTypes.DATE,
         allowNull: true
      },
      length: {
         type: DataTypes.INTEGER(10),
         allowNull: true
      },
      genre_id: {
         type: DataTypes.INTEGER(10),
         references: "genres", // nombre de tabla en db
         referencesKey: "id" // nombre de col en db
      }
   }

   const config = {
      tableName: "movies",
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      paranoid: true,
      deletedAt: 'deleted_at'
   }

   const Movie = sequelize.define(
      alias,
      cols,
      config
   )

   Movie.associate = function(models) {
      Movie.belongsTo(models.Genres, {
         as: "genres",
         foreignKey: 'genre_id'
      })

      Movie.belongsToMany(models.Actors, {
         as: 'actors',
         through: 'actor_movie',
         foreignKey: 'movie_id',
         otherKey: 'actor_id',
         timestamps: false
      })
   }

   return Movie

}