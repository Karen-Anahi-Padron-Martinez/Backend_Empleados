const express = require("express");
const router = express.Router();
const { getDocumentos, createDocumentos } = require("../controllers/documentoController");

router.get("/documento/documento", getDocumentos);
router.post("/documento", createDocumentos);

module.exports = router;



