// controllers/cursosController.js
const Participacion = require('../models/participacionModel');



// Registrar cursos en un documento separado por empleado
const registrarParticipaciones = async (req, res) => {
    try {
      const { empleados, nombre_actividad, estatus } = req.body;
  
      if (!empleados || !Array.isArray(empleados) || empleados.length === 0) {
        return res.status(400).json({ message: "Debe enviar un array con al menos un empleado." });
      }
  
      if (!nombre_actividad || !estatus) {
        return res.status(400).json({ message: "Faltan datos obligatorios de la actividad." });
      }
  
      const resultados = [];
  
      for (const empleado of empleados) {
        // Datos de la actividad
        const actividadData = {
          nombre_actividad,
          estatus
        };
  
        // Buscar si ya existe un documento para ese empleado
        const existente = await Participacion.findOne({ clave_empleado: empleado.clave });
  
        if (existente) {
          // Si ya existe, agregamos la actividad al array de actividades
          await Participacion.findOneAndUpdate(
            { clave_empleado: empleado.clave },
            { $push: { actividad: actividadData } }
          );
        } else {
          // Si no existe, creamos un nuevo documento de participación
          const nuevaParticipacion = new Participacion({
            clave_empleado: empleado.clave,
            nombre_empleado: empleado.nombre, // Ahora guardamos el nombre del empleado
            actividad: [actividadData]
          });
  
          await nuevaParticipacion.save();
        }
  
        resultados.push({
          clave: empleado.clave,
          message: "Participación registrada exitosamente"
        });
      }
  
      res.status(200).json(resultados);
  
    } catch (error) {
      console.error('Error al registrar participaciones:', error);
      res.status(500).json({ message: 'Error al registrar las participaciones', error: error.message });
    }
  };
  
// Obtener todos los empleados con sus actividades
const obtenerEmpleadosConCursos = async (req, res) => {
    try {
        // Buscar todos los empleados con sus actividades
        const empleadosConCursos = await Participacion.find({});

        // Verificar si se encontraron empleados
        if (!empleadosConCursos || empleadosConCursos.length === 0) {
            return res.status(404).json({ message: "No se encontraron empleados con actividades." });
        }

        // Devolver los empleados con sus actividades
        res.status(200).json(empleadosConCursos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener empleados y sus cursos', error });
    }
};

module.exports = { registrarParticipaciones,obtenerEmpleadosConCursos};