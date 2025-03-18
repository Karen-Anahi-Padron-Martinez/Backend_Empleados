// routes/cursosRoutes.js
const express = require('express');
const router = express.Router();
const { registrarParticipaciones, obtenerEmpleadosConCursos, obtenerActividadesEmpleado} = require('../controllers/participacionController');


router.post('/registrar/participaciones', registrarParticipaciones);
router.get('/participacion/empleados-con-cursos', obtenerEmpleadosConCursos);

router.get('/participacion/empleado/:clave_empleado', obtenerActividadesEmpleado);
module.exports = router;