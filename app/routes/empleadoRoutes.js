// routes/empleadoRoutes.js
const express = require('express');
const { crearEmpleado } = require('../controllers/empleadoController');

const router = express.Router();

// Ruta para registrar un nuevo empleado
router.post('/empleados', crearEmpleado);

module.exports = router;
