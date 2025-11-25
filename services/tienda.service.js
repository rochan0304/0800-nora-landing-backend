const db = require('../models');
const Respuesta_tienda = db.Respuesta_tienda;
const Productos_tienda = db.Productos_tienda;

exports.crearRespuestaTienda = async (data) => {
    const {
        nombre,
        apellido,
        correo,
        nombre_negocio,
        productos,
        otro_producto,
        ubicacion,
        interes,
        beneficios,
        reunion
    } = data;

    try {
        const nuevaRespuesta = await Respuesta_tienda.create({
            nombre,
            apellido,
            correo,
            nombre_negocio,
            otro_producto,
            ubicacion,
            interes,
            beneficios,
            reunion
        });

        const productosAGuardar = productos.map(producto => ({
            nombre: producto,
            respuesta_id: nuevaRespuesta.id
        }));

        const productosGuardados = await Productos_tienda.bulkCreate(productosAGuardar);

        console.log(productosGuardados);
        return [ nuevaRespuesta, productosGuardados ];

    } catch (error) {
        throw error;
    }
};