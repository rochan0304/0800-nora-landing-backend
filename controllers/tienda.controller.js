const { crearRespuestaTienda } = require("../services/tienda.service");

exports.postTienda = async (req, res) => {
    const body = req.body;
    console.log('hola')
    try {
        const response = await crearRespuestaTienda(body);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};