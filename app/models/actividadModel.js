const mongoose = require("mongoose");

const actividadSchema = new mongoose.Schema({
    nombre_actividad: { type: String, required: true }
    
  }, { collection: 'actividad' }); 

const Actividad = mongoose.model("Actividad", actividadSchema);

module.exports = Actividad;