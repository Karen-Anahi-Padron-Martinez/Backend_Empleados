const Parentesco = require("../models/parentescoModel");

exports.getParentesco= async (req, res) => {
  try {
    const parentescos = await Parentesco.find();
    res.json(parentescos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener departamentos" });
  }
};


exports.createParentesco = async (req, res) => {
  try {
    const nuevoParentesco = new Parentesco(req.body);
    await nuevoParentesco.save();
    res.status(201).json(nuevoParentesco);
  } catch (error) {
    res.status(500).json({ message: "Error al crear departamento" });
  }
};
