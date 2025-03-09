const mongoose = require("mongoose");

const DocumentoSchema = new mongoose.Schema({
  tipo_documento: { type: String, required: true }
});

const Documento = mongoose.model("Documento", DocumentoSchema);

module.exports = Documento;
