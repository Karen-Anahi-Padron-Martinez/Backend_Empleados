const Empleado = require('../models/empleadoModel'); // Importa el modelo de empleados

// Obtener el último consecutivo
exports.obtenerUltimoConsecutivo = async (req, res) => {
  try {
    const ultimoEmpleado = await Empleado.findOne().sort({ clave_empleado: -1 }); // Busca el último empleado
    let consecutivo = 1; // Si no hay empleados, empieza desde 1

    if (ultimoEmpleado) {
      const claveSplit = ultimoEmpleado.clave_empleado.split('-');
      consecutivo = parseInt(claveSplit[1], 10) + 1;
    }

    res.json({ consecutivo });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el consecutivo' });
  }
};
