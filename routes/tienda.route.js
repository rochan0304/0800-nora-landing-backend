const express = require('express');
const { verificarTienda } = require('../utils/verificarTienda');
const { handleValidationErrors } = require('../middlewares/handleValidationErrors');
const tiendaController = require('../controllers/tienda.controller');
const router = express.Router();

router.post('/', verificarTienda, handleValidationErrors, tiendaController.postTienda);

module.exports = router;