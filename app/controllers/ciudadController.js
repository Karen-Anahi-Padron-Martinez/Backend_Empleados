const Ciudad = require("../models/ciudadModel");

// Obtener todos los departamentos
exports.getCiudades = async (req, res) => {
  try {
    const ciudades = await Ciudad.find();
    res.json(ciudades);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener departamentos" });
  }
};

// Crear un documento
exports.createCiudades = async (req, res) => {
  try {
    const nuevoCiudad = new Ciudad(req.body);
    await nuevoCiudad.save();
    res.status(201).json(nuevoCiudad);
  } catch (error) {
    res.status(500).json({ message: "Error al crear departamento" });
  }
};
