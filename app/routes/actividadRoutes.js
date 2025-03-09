
const express = require("express");
const router = express.Router();
const { getActividad, createActividad } = require("../controllers/actividadController");

router.get("/actividad", getActividad);
router.post("/actividad", createActividad);

module.exports = router;
