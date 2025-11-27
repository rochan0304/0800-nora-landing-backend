const { body, oneOf } = require('express-validator');
const { capitalize } = require('./capitalize');
const db = require('../models');
const Respuesta_tienda = db.Respuesta_tienda;

exports.verificarTienda = [
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
        const respuesta = await Respuesta_tienda.findOne({where: { correo }});

        if (correo) {
            return Promise.reject('Este correo ya está en uso.');
        }
    }),

    body('nombre_negocio')
    .trim()
    .notEmpty().withMessage('El nombre del negocio es obligatorio.'),
    
    oneOf([
        body('productos').isArray({ min: 1 }),
        body('otro_producto').notEmpty()
    ], {
        message: 'Debes seleccionar un tipo de producto.'
    }),

    body('ubicacion')
    .trim()
    .notEmpty().withMessage('Debe seleccionar su ubicación.'),

    body('interes')
    .trim()
    .notEmpty().withMessage('Debe seleccionar una opción.'),

    body('beneficios')
    .trim()
    .notEmpty().withMessage('Debe seleccionar una opción.'),

    body('reunion')
    .trim()
    .notEmpty().withMessage('Debe seleccionar una opción.'),
];