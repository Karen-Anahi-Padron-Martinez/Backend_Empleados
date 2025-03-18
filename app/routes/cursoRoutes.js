// routes/cursosRoutes.js
const express = require('express');
const router = express.Router();
const { crearCurso,registrarCursos,obtenerCursosDeEmpleados } = require('../controllers/cursoController');

// Ruta para crear un curso
router.post('/cursos', crearCurso);
router.post('/registrar-cursos', registrarCursos);
// Ruta para obtener todos los cursos de los empleados
router.get('/curso/cursos', obtenerCursosDeEmpleados);

module.exports = router;
