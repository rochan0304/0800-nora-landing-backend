const { body, oneOf } = require('express-validator');
const { capitalize } = require('./capitalize');

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
    .isEmail().withMessage('Formato de correo inválido.'),

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