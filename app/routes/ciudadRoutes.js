const express = require("express");
const router = express.Router();
const { getCiudades } = require("../controllers/ciudadController");
const { createCiudades } = require("../controllers/ciudadController");

router.get("/ciudad", getCiudades);
router.post("/ciudad", createCiudades);

module.exports = router;
