'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Respuesta_tienda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Productos_tienda, {
        foreignKey: 'respuesta_id',
        as: 'productosTienda'
      });
    }
  }
  Respuesta_tienda.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },

    apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },

    correo: {
      type: DataTypes.STRING,
      allowNull: false
    },

    nombre_negocio: {
      type: DataTypes.STRING,
      allowNull: false
    },

    otro_producto: {
      type: DataTypes.STRING,
    },

    ubicacion: {
      type: DataTypes.STRING,
      allowNull: false
    },

    interes: {
      type: DataTypes.STRING,
      allowNull: false
    },

    beneficios: {
      type: DataTypes.STRING,
      allowNull: false
    },

    reunion: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Respuesta_tienda',
  });
  return Respuesta_tienda;
};