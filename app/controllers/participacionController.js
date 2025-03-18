// controllers/cursosController.js
const Participacion = require('../models/participacionModel');



// Registrar cursos en un documento separado por empleado
const registrarParticipaciones = async (req, res) => {
    try {
        const { clave_empleado, nombre_actividad, estatus } = req.body;

        if (!clave_empleado || !Array.isArray(clave_empleado) || clave_empleado.length === 0) {
            return res.status(400).json({ message: "Debe enviar un array con al menos un empleado." });
        }


        let resultados = [];

        for (const clave of clave_empleado) {
            // Usamos findOneAndUpdate con upsert: true
            await Participacion.findOneAndUpdate(
                { clave_empleado: clave }, // Busca por clave
                { 
                    $push: { actividad: { nombre_actividad, estatus } }
                },
                { upsert: true, new: true } // Crea si no existe, y devuelve el actualizado
            );

            resultados.push({ clave, message: "Participacion registrado exitosamente" });
        }

        res.status(200).json(resultados);

    } catch (error) {
        res.status(500).json({ message: 'Error al registrar la Participacion', error });
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
const obtenerActividadesEmpleado = async (req, res) => {
    try {
        const { clave_empleado } = req.params;

        // Verificar si se pasó la clave del empleado
        if (!clave_empleado) {
            return res.status(400).json({ message: "Se debe proporcionar la clave del empleado." });
        }

        // Buscar solo las actividades de ese empleado
        const empleadoConCursos = await Participacion.findOne({ clave_empleado });

        // Verificar si se encontraron actividades para el empleado
        if (!empleadoConCursos || !empleadoConCursos.actividad || empleadoConCursos.actividad.length === 0) {
            return res.status(404).json({ message: "El empleado no tiene actividades registradas." });
        }

        // Devolver las actividades del empleado
        res.status(200).json({ actividades: empleadoConCursos.actividad });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener las actividades del empleado', error });
    }
};

module.exports = { registrarParticipaciones,obtenerEmpleadosConCursos, obtenerActividadesEmpleado };