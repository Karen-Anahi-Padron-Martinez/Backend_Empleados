const mongoose = require("mongoose");

const PuestoSchema = new mongoose.Schema({
  nombre: { type: String, required: true }
});


const Puesto = mongoose.model("Puesto", PuestoSchema);

module.exports = Puesto;
