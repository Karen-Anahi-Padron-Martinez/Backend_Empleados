const mongoose = require('mongoose');

// Definir esquemas
const departamentoSchema = new mongoose.Schema({ nombre: String });
const puestoSchema = new mongoose.Schema({ nombre_puesto: String });
const documentoSchema = new mongoose.Schema({ tipo_documento: String });
const actividadSchema = new mongoose.Schema({ nombre_actividad: String });
const ciudadSchema = new mongoose.Schema({ ciudad: String });
const parentescoSchema = new mongoose.Schema({ parentesco: String });

// Crear modelos
const Departamento = mongoose.model("Departamento", departamentoSchema);
const Puesto = mongoose.model("Puesto", puestoSchema);
const Documento = mongoose.model("Documento", documentoSchema);
const Actividad = mongoose.model("Actividad", actividadSchema);
const Ciudad = mongoose.model("Ciudad", ciudadSchema);
const Parentesco = mongoose.model("Parentesco", parentescoSchema);

// Exportar los modelos
module.exports = { Departamento, Puesto, Documento, Actividad, Ciudad, Parentesco };
