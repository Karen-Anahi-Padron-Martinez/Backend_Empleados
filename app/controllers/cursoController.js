// controllers/cursosController.js
const Curso = require('../models/cursoModel');

const crearCurso = async (req, res) => {
  const { clave_empleado, cursos } = req.body;

  try {
    const nuevoCurso = new Curso({
      clave_empleado,
      cursos
    });

    await nuevoCurso.save();
    res.status(201).json({ mensaje: 'Curso creado exitosamente', curso: nuevoCurso });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear el curso', error: error.message });
  }
};

// Registrar cursos en un documento separado por empleado
const registrarCursos = async (req, res) => {
    try {
        const { clave_empleado, nombre_curso, fecha_inicio, fecha_termino, documento } = req.body;

        if (!clave_empleado || !Array.isArray(clave_empleado) || clave_empleado.length === 0) {
            return res.status(400).json({ message: "Debe enviar un array con al menos un empleado." });
        }


        let resultados = [];

        for (const clave of clave_empleado) {
            // Usamos findOneAndUpdate con upsert: true
            await Curso.findOneAndUpdate(
                { clave_empleado: clave }, // Busca por clave
                { 
                    $push: { cursos: { nombre_curso, fecha_inicio, fecha_termino, documento } }
                },
                { upsert: true, new: true } // Crea si no existe, y devuelve el actualizado
            );

            resultados.push({ clave, message: "Curso registrado exitosamente" });
        }

        res.status(200).json(resultados);

    } catch (error) {
        res.status(500).json({ message: 'Error al registrar los cursos', error });
    }
};
const obtenerCursosDeEmpleados = async (req, res) => {
  try {
      // Obtener todos los cursos y sus detalles
      const cursos = await Curso.find({});

      // Verifica si se encontraron cursos
      if (!cursos || cursos.length === 0) {
          return res.status(404).json({ message: "No se encontraron cursos de empleados." });
      }

      // Devuelve la lista de cursos
      res.status(200).json(cursos);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener los cursos de los empleados', error });
  }
};

const getCursosPorEmpleado = async (req, res) => {
  const { clave_empleado } = req.params;

  try {
    // Buscar cursos para el empleado
    const cursos = await Curso.find({ clave_empleado });
    if (!cursos.length) {
      return res.status(404).json({ mensaje: 'No se encontraron cursos para este empleado' });
    }
    res.status(200).json(cursos); // Enviar los cursos encontrados
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener los cursos', error: error.message });
  }
};
module.exports = { crearCurso,registrarCursos,obtenerCursosDeEmpleados, getCursosPorEmpleado};