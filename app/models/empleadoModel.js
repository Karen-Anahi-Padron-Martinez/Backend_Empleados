// models/empleadoModel.js
const mongoose = require('mongoose');

const empleadoSchema = new mongoose.Schema({
  clave_empleado: { type: String, unique: true },
  nombre: String,
  apellido_paterno: String,
  apellido_materno: String,
  fecha_alta: Date,
  rfc: String,
  fecha_nacimiento: Date,
  sexo: String,
  foto: String,
  contrasenia: String,
  rol: Number,  // 1 para Admin, 2 para Empleado
  domicilio: {
    calle: String,
    numero_interior: String,
    numero_exterior: String,
    colonia: String,
    codigo_postal: String,
    ciudad: String
  },
  departamento: String,
  puesto: String,
  telefonos: [String],
  correos: [String],
  referencias_familiares: [{
    nombre: String,
    parentesco: String,
    telefonos: [String],
    correo: String
  }]
});

const Empleado = mongoose.model('Empleado', empleadoSchema);

module.exports = Empleado;
