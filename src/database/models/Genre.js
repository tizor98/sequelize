module.exports = (sequelize, DataTypes) => {

   const alias = "Genres"

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
      timestamps: false
   }

   const Genre = sequelize.define(
      alias,
      cols,
      config
   )

   return Genre

}