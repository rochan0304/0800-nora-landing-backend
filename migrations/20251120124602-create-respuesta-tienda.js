'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Respuesta_tiendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },

      apellido: {
        type: Sequelize.STRING,
        allowNull: false
      },

      correo: {
        type: Sequelize.STRING,
        allowNull: false
      },

      nombre_negocio: {
        type: Sequelize.STRING,
        allowNull: false
      },

      otro_producto: {
        type: Sequelize.STRING,
      },

      ubicacion: {
        type: Sequelize.STRING,
        allowNull: false
      },

      interes: {
        type: Sequelize.STRING,
        allowNull: false
      },

      beneficios: {
        type: Sequelize.STRING,
        allowNull: false
      },

      reunion: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('Respuesta_tiendas');
  }
};