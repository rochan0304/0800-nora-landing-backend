const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');
const { verificarCliente } = require('../utils/verficarCliente');
const { handleValidationErrors } = require('../middlewares/handleValidationErrors');

router.post('/', verificarCliente, handleValidationErrors, clienteController.postCliente);

module.exports = router;