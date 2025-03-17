
const express = require("express");
const router = express.Router();
const { getActividad, createActividad } = require("../controllers/actividadController");

router.get("/actividad/actividad", getActividad);
router.post("/actividad", createActividad);

module.exports = router;
