const Puesto = require("../models/puestoModel");

// Obtener todos los departamentos
exports.getPuesto = async (req, res) => {
  try {
    const puestos = await Puesto.find();
    res.json(puestos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener departamentos" });
  }
};

// Crear un departamento
exports.createPuesto = async (req, res) => {
  try {
    const nuevoPuesto = new Puesto(req.body);
    await nuevoPuesto.save();
    res.status(201).json(nuevoPuesto);
  } catch (error) {
    res.status(500).json({ message: "Error al crear departamento" });
  }
};
