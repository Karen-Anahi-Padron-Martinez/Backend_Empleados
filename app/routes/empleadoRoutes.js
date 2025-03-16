// routes/empleadoRoutes.js
const express = require('express');
const { crearEmpleado,getEmpleados,updatRol, obtenerEmpleados,updateRol,deleteEmpleado,obtenerEmpleadoPorClave,actualizarEmpleado,getUsersWithRole3} = require('../controllers/empleadoController');
const empleadoController = require('../controllers/empleadosController');
const router = express.Router();

// Ruta para registrar un nuevo empleado
router.post('/empleados', crearEmpleado);
router.get('/empleados', getEmpleados);

// Ruta para actualizar el rol (baja temporal)
router.put('/empleados/:id/rol',updateRol);
router.put('/empleados/:id/rols',updatRol);
// Ruta para eliminar un usuario (baja definitiva)
router.delete('/empleados/:id', deleteEmpleado);


router.get('/ultimo-consecutivo', empleadoController.obtenerUltimoConsecutivo);

// Ruta para actualizar un empleado
router.put('/empleados/actualizar/:clave_empleado', actualizarEmpleado);
router.get('/empleados/role3', getUsersWithRole3);
router.get('/:clave_empleado', obtenerEmpleadoPorClave);
router.get('/nombre/empleados', obtenerEmpleados);

module.exports = router;
