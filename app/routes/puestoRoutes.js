const express = require("express");
const router = express.Router();
const { getPuesto, createPuesto } = require("../controllers/puestoController");

router.get("/puesto/puesto", getPuesto);
router.post("/puesto", createPuesto);

module.exports = router;
