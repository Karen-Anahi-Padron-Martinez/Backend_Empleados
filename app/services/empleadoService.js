const Empleado = require('../models/empleadoModel');

class EmpleadoService {
  static async registrarEmpleado(empleadoData) {
    try {
      const nuevoEmpleado = new Empleado(empleadoData);
      await nuevoEmpleado.save();
      return nuevoEmpleado;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = EmpleadoService;
