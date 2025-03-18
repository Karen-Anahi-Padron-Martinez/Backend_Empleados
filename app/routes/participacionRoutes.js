// routes/cursosRoutes.js
const express = require('express');
const router = express.Router();
const { registrarParticipaciones, obtenerEmpleadosConCursos} = require('../controllers/participacionController');


router.post('/registrar/participaciones', registrarParticipaciones);
router.get('/participacion/empleados-con-cursos', obtenerEmpleadosConCursos);
module.exports = router;