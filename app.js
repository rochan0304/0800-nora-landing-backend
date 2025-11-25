const express = require('express');
const app = express();
const cors = require('cors');

const tiendaRoutes = require('./routes/tienda.route');
const clienteRoutes = require('./routes/cliente.route');

const corsOptions = {
    origin: ['http://localhost:5173', 'https://myxoid-bridleless-lulu.ngrok-free.dev'],
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