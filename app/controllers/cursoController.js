// controllers/cursosController.js
const Curso = require('../models/cursoModel');

const crearCurso = async (req, res) => {
  const { clave_empleado,nombre_empleado, cursos } = req.body;

  try {
    const nuevoCurso = new Curso({
      clave_empleado,
      nombre_empleado,
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
    const { empleados, nombre_curso, fecha_inicio, fecha_termino, documento } = req.body;

    if (!empleados || !Array.isArray(empleados) || empleados.length === 0) {
      return res.status(400).json({ message: "Debe enviar un array con al menos un empleado." });
    }

    const resultados = [];

    for (const empleado of empleados) {
      const cursoData = {
        nombre_curso,
        fecha_inicio,
        fecha_termino,
        documento
      };

      // Busca si ya existe un documento para el empleado
      const existente = await Curso.findOne({ clave_empleado: empleado.clave });

      if (existente) {
        // Si existe, actualiza agregando el curso al array
        await Curso.findOneAndUpdate(
          { clave_empleado: empleado.clave },
          { $push: { cursos: cursoData } }
        );
      } else {
        // Si no existe, crea un nuevo documento
        const nuevoCurso = new Curso({
          clave_empleado: empleado.clave,
          nombre_empleado: empleado.nombre,
          cursos: [cursoData]
        });

        await nuevoCurso.save();
      }

      resultados.push({
        clave: empleado.clave,
        message: "Curso registrado exitosamente"
      });
    }

    res.status(200).json(resultados);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar los cursos', error: error.message });
  }
};

// Obtener todos los cursos
const obtenerCursosDeEmpleados = async (req, res) => {
  try {
    const cursos = await Curso.find({});

    if (!cursos || cursos.length === 0) {
      return res.status(404).json({ message: "No se encontraron cursos de empleados." });
    }

    res.status(200).json(cursos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los cursos de los empleados', error: error.message });
  }
};

module.exports = { crearCurso,registrarCursos,obtenerCursosDeEmpleados};