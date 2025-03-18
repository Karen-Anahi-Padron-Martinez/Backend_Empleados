// routes/cursosRoutes.js
const express = require('express');
const router = express.Router();
const { registrarParticipaciones } = require('../controllers/participacionController');


router.post('/registrar/participaciones', registrarParticipaciones);

module.exports = router;