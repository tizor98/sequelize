module.exports = (sequelize, DataTypes) => {

   const alias = "Genres"

   const cols = {
      id: {
         type: DataTypes.INTEGER(10),
         autoIncrement: true,
         primaryKey: true
      },
      name: {
         type: DataTypes.STRING(100),
         allowNull: true
      },
      ranking: {
         type: DataTypes.INTEGER(10),
         allowNull: true
      },
      active: {
         type: DataTypes.BOOLEAN,
         allowNull: true
      }
   }

   const config = {
      tableName: "genres",
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      paranoid: true,
      deletedAt: 'deleted_at'
   }

   const Genre = sequelize.define(
      alias,
      cols,
      config
   )

   Genre.associate = function(models) {
      Genre.hasMany( models.Movies, {
         as: "movies",
         foreignKey: 'genre_id'
      })
   }

   return Genre

}