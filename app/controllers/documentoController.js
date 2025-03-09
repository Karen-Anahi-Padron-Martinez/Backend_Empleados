const Documento = require("../models/documentoModel");

// Obtener todos los departamentos
exports.getDocumentos = async (req, res) => {
  try {
    const documentos = await Documento.find();
    res.json(documentos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener departamentos" });
  }
};

// Crear un documento
exports.createDocumentos = async (req, res) => {
  try {
    const nuevoDocumento = new Documento(req.body);
    await nuevoDocumento.save();
    res.status(201).json(nuevoDocumento);
  } catch (error) {
    res.status(500).json({ message: "Error al crear departamento" });
  }
};
