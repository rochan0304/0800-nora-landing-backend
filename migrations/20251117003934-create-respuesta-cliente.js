'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Respuesta_clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      apellido: {
        type: Sequelize.STRING,
        allowNull: false
      },

      correo: {
        type: Sequelize.STRING,
        allowNull: false
      },

      fecha_nacimiento: {
        type: Sequelize.STRING,
        allowNull: false
      },

      otro_producto: {
        type: Sequelize.STRING
      },

      frecuencia: {
        type: Sequelize.STRING
      },

      canal_servicio: {
        type: Sequelize.STRING
      },

      ubicacion: {
        type: Sequelize.STRING
      },

      mejorar_experiencia: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Respuesta_clientes');
  }
};