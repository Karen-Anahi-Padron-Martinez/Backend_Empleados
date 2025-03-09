const mongoose = require("mongoose");

const DepartamentoSchema = new mongoose.Schema({
  nombre: { type: String, required: true }
});




const Departamento = mongoose.model("Departamento", DepartamentoSchema);

module.exports = Departamento;
