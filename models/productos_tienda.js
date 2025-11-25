'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productos_tienda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Respuesta_tienda, {
        foreignKey: 'respuesta_id',
        as: 'respuestaTienda'
      });
    }
  }
  Productos_tienda.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },

    respuesta_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Productos_tienda',
  });
  return Productos_tienda;
};