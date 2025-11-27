const { body, oneOf } = require('express-validator');
const { capitalize } = require('./capitalize');
const db = require('../models');
const Respuesta_cliente = db.Respuesta_cliente;

exports.verificarCliente = [
    body('nombre')
    .trim()
    .customSanitizer(capitalize)
    .notEmpty().withMessage('El nombre es obligatorio.'),

    body('apellido')
    .trim()
    .customSanitizer(capitalize)
    .notEmpty().withMessage('El apellido es obligatorio.'),

    body('correo')
    .trim()
    .isEmail().withMessage('Formato de correo inválido.')
    .custom(async correo => {
        const respuesta = await Respuesta_cliente.findOne({where: { correo }});

        console.log('holaa' + respuesta);

        if(respuesta) {
            return Promise.reject('Este correo ya está en uso.');
        }
    }),

    body('fecha_nacimiento')
    .notEmpty().withMessage('Debe seleccionar un rango de fechas.'),
    
    oneOf([
        body('productos').isArray({ min: 1 }),
        body('otro_producto').notEmpty()
    ], {
        message: 'Debes seleccionar un tipo de producto.'
    }),

    body('frecuencia')
    .trim()
    .notEmpty().withMessage('Debe seleccionar una opción.'),

    body('canal_servicio')
    .trim()
    .notEmpty().withMessage('Debe seleccionar una opción.'),

    body('ubicacion')
    .trim()
    .notEmpty().withMessage('Debe seleccionar una ubicación.'),
];