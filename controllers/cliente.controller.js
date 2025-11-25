const { crearRespuestaCliente } = require('../services/cliente.service');

exports.postCliente = async (req, res) => {
    try {
        const response = await crearRespuestaCliente(req.body);

        res.status(201).json(response);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};