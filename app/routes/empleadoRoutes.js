// routes/empleadoRoutes.js
const express = require('express');
const { crearEmpleado,getEmpleados, updateRol,deleteEmpleado} = require('../controllers/empleadoController');
const empleadoController = require('../controllers/empleadosController');
const router = express.Router();

// Ruta para registrar un nuevo empleado
router.post('/empleados', crearEmpleado);
router.get('/empleados', getEmpleados);

// Ruta para actualizar el rol (baja temporal)
router.put('/empleados/:id/rol',updateRol);

// Ruta para eliminar un usuario (baja definitiva)
router.delete('/empleados/:id', deleteEmpleado);


router.get('/ultimo-consecutivo', empleadoController.obtenerUltimoConsecutivo);


module.exports = router;
