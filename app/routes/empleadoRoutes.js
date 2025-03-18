// routes/empleadoRoutes.js
const express = require('express');
const { crearEmpleado,getEmpleados,
        updatRol, obtenerEmpleados,
        updateRol,deleteEmpleado,
        obtenerEmpleadoPorClave,actualizarEmpleado,
        getUsersWithRole3,actualizarFoto,
        obtenerEmpleadoPorId, agregarTelefono,
        actualizarTelefono, eliminarTelefono,
        agregarCorreo, actualizarCorreo,
        eliminarCorreo} = require('../controllers/empleadoController');
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

// Ruta para actualizar la foto
router.put('/empleados/:id/foto', actualizarFoto);

router.get('/empleados/:id', obtenerEmpleadoPorId);
router.post('/empleados/:id/telefonos', agregarTelefono);
router.put('/empleados/:id/telefonos/:oldTelefono/:newTelefono', actualizarTelefono);
router.delete('/empleados/:id/telefonos/:telefono', eliminarTelefono);


router.post('/empleados/:id/correos', agregarCorreo);
router.delete('/empleados/:id/correos/:correo', eliminarCorreo);
router.put('/empleados/:id/correos/:oldCorreo', actualizarCorreo);


module.exports = router;
