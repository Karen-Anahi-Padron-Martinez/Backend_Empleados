const mongoose = require('mongoose');

const ParticipacionSchema = new mongoose.Schema({
  clave_empleado: {type: String, required: true},
  nombre_empleado: {type: String,required: true},
  actividad: [{
    nombre_actividad: {type: String, required: true},
    estatus: {type: String, required: true},
  }]
});

module.exports = mongoose.model('Participacion', ParticipacionSchema);
