const express = require("express");
const router = express.Router();
const { getDepartamentos, createDepartamento } = require("../controllers/departamentoController");

router.get("/departamento/departamento", getDepartamentos);
router.post("/departamento", createDepartamento);

module.exports = router;



