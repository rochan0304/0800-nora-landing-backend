'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productos_cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Respuesta_cliente, {
        foreignKey: 'respuesta_id',
        as: 'respuestaCliente'
      });
    }
  }
  Productos_cliente.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    respuesta_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Productos_cliente',
  });
  return Productos_cliente;
};