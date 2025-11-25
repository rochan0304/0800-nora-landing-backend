'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Respuesta_cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Productos_cliente, {
        foreignKey: 'respuesta_id',
        as: 'productosCliente'
      });
    }
  }
  Respuesta_cliente.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },

    correo: {
      type: DataTypes.STRING,
      allowNull: false
    },

    fecha_nacimiento: {
      type: DataTypes.STRING,
      allowNull: false
    },

    otro_producto: {
      type: DataTypes.STRING
    },

    frecuencia: {
      type: DataTypes.STRING
    },

    canal_servicio: {
      type: DataTypes.STRING
    },

    ubicacion: {
      type: DataTypes.STRING
    },

    mejorar_experiencia: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Respuesta_cliente',
  });
  return Respuesta_cliente;
};