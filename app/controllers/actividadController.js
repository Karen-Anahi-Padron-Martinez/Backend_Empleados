const Actividad = require("../models/ActividadModel");

// Obtener todos los departamentos
exports.getActividad = async (req, res) => {
  try {
    const actividades = await Actividad.find();
    res.json(actividades);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener departamentos" });
  }
};

// Crear un departamento
exports.createActividad = async (req, res) => {
  try {
    const nuevoActividad = new Actividad(req.body);
    await nuevoActividad.save();
    res.status(201).json(nuevoActividad);
  } catch (error) {
    res.status(500).json({ message: "Error al crear departamento" });
  }
};
