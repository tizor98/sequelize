// Falta implementar este modelo. Para hacer crud con esto se debe hacer el modelo de la tabla pivot

module.exports = (sequelize, DataTypes) => {

   const alias = 'Actors'

   const cols = {
       id: {
           type: DataTypes.BIGINT(10).UNSIGNED,
           primaryKey: true,
           autoIncrement: true
       },
       first_name: {
           type: DataTypes.STRING(100),
           allowNull: false
       },
       last_name: {
           type: DataTypes.STRING(100),
           allowNull: false
       },
       rating: {
           type: DataTypes.DECIMAL(3,1),
           allowNull: false
       },
       favorite_movie_id: DataTypes.BIGINT(10).UNSIGNED
   }

   const config = {
      tableName: 'actors',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      paranoid: true,
      deletedAt: 'deleted_at'
   }

   const Actor = sequelize.define(
      alias,
      cols,
      config
   ) 

   Actor.associate = function(models) {
      Actor.belongsToMany(models.Movies, {
         as: 'movies',
         through: 'actor_movie',
         foreignKey: 'actor_id',
         otherKey: 'movie_id',
         timestamps: false
      })
   }
   
   return Actor
}