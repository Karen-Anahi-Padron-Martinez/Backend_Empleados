const express = require("express");
const router = express.Router();
const { getParentesco, createParentesco } = require("../controllers/parentescoController");

router.get("/parentesco/parentesco", getParentesco);
router.post("/puesto", createParentesco);

module.exports = router;
