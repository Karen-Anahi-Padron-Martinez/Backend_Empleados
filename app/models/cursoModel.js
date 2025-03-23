// models/curso.js
const mongoose = require('mongoose');

const cursoSchema = new mongoose.Schema({
  clave_empleado: {
    type: String,
    required: true
  },
  nombre_empleado: {
    type: String,
    required: true
  },
  cursos: [
    {
      nombre_curso: {
        type: String,
        required: true
      },
      fecha_inicio: {
        type: Date,
        required: true
      },
      fecha_termino: {
        type: Date,
        required: true
      },
      documento: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = mongoose.model('Curso', cursoSchema);
