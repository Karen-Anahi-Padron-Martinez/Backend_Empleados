const Departamento = require("../models/departamentoModel");

// Obtener todos los departamentos
exports.getDepartamentos = async (req, res) => {
  try {
    const departamentos = await Departamento.find();
    res.json(departamentos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener departamentos" });
  }
};

// Crear un departamento
exports.createDepartamento = async (req, res) => {
  try {
    const nuevoDepartamento = new Departamento(req.body);
    await nuevoDepartamento.save();
    res.status(201).json(nuevoDepartamento);
  } catch (error) {
    res.status(500).json({ message: "Error al crear departamento" });
  }
};
