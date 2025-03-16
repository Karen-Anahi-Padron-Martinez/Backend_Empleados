// routes/cursosRoutes.js
const express = require('express');
const router = express.Router();
const { crearCurso,registrarCursos } = require('../controllers/cursoController');

// Ruta para crear un curso
router.post('/cursos', crearCurso);
router.post('/registrar-cursos', registrarCursos);

module.exports = router;
