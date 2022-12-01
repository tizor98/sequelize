module.exports = (sequelize, DataTypes) => {

   const alias = "Movies"

   const cols = {
      id: {
         type: DataTypes.INTEGER(10),
         autoIncrement: true,
         primaryKey: true
      },
      created_at: {
         type: DataTypes.DATE,
         allowNull: true
      },
      updated_at: {
         type: DataTypes.DATE,
         allowNull: true
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
      timestamps: false
   }

   const Movie = sequelize.define(
      alias,
      cols,
      config
   )

   return Movie

}