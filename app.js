const express = require('express');
const app = express();
const cors = require('cors');

const tiendaRoutes = require('./routes/tienda.route');
const clienteRoutes = require('./routes/cliente.route');

const allowedOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173';

const corsOptions = {
    origin: allowedOrigin,
    methods: 'GET,HEAD,PUT,POST,DELETE',
    credentials: true,
    optionSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/tienda', tiendaRoutes);
app.use('/api/cliente', clienteRoutes);

app.get('/', (req, res) => {
    res.send('Bienvenido al backend');
});

module.exports = app;