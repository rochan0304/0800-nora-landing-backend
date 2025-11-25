const db = require('../models');
const Respuesta_cliente = db.Respuesta_cliente;
const Productos_cliente = db.Productos_cliente;

exports.crearRespuestaCliente = async ( data ) => {
    const { 
        nombre,
        apellido,
        correo,
        fecha_nacimiento,
        productos,
        otro_producto,
        frecuencia,
        canal_servicio,
        ubicacion,
        mejorar_experiencia 
    } = data;

    try {
        const nuevaRespuesta = await Respuesta_cliente.create({
            nombre,
            apellido,
            correo,
            fecha_nacimiento,
            otro_producto,
            frecuencia,
            canal_servicio,
            ubicacion,
            mejorar_experiencia
        });

        const productosAGuardar = productos.map(producto => ({
            nombre: producto,
            respuesta_id: nuevaRespuesta.id
        }));

        const productosGuardados = await Productos_cliente.bulkCreate(productosAGuardar);

        return [nuevaRespuesta, productosGuardados];

    } catch (error) {
        throw error;
    }
};