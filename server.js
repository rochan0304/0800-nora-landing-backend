if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = require('./app');
const db = require('./models');
const PORT = process.env.PORT || 3001;

const startServer = async () => {
    try {
        await db.sequelize.authenticate();
        console.log('Conexion exitosa a la base de datos');
        app.listen(PORT, () => {
            console.log('Servidor activo en el puerto: ' + PORT);
        });
    } catch (error) {
        console.error('Error con el servidor:', error.message);
    }
};

startServer();