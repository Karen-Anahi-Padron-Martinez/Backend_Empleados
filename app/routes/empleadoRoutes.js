// routes/empleadoRoutes.js
const express = require('express');
const { crearEmpleado } = require('../controllers/empleadoController');
const empleadoController = require('../controllers/empleadosController');
const router = express.Router();

// Ruta para registrar un nuevo empleado
router.post('/empleados', crearEmpleado);


router.get('/ultimo-consecutivo', empleadoController.obtenerUltimoConsecutivo);


module.exports = router;
