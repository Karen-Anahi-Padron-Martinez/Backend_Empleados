const bcrypt = require('bcryptjs');
const Empleado = require('../models/empleadoModel');

// Función para crear un nuevo empleado
const crearEmpleado = async (req, res) => {

    const { nombre, apellido_paterno, apellido_materno, fecha_nacimiento, sexo, correo, clave_empleado, contrasenia, ...resto } = req.body;

    // Verifica si los campos requeridos están presentes
    if (!clave_empleado || !nombre || !apellido_paterno || !apellido_materno || !contrasenia) {
      return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }

    try {
      // Hashear la contraseña
      const salt = await bcrypt.genSalt(10);  // Generar un salt con 10 rondas
      const contraseniaHasheada = await bcrypt.hash(contrasenia, salt);  // Hashear la contraseña

      // Crear el nuevo empleado con la contraseña hasheada
      const nuevoEmpleado = new Empleado({
        clave_empleado,
        nombre,
        apellido_paterno,
        apellido_materno,
        fecha_alta: new Date(),
        rfc: 'SIGR-770910', // Generar RFC aquí si es necesario
        fecha_nacimiento,
        sexo,
        foto: resto.foto,
        contrasenia: contraseniaHasheada,  // Guardar la contraseña hasheada
        rol: 1,  // Definir el rol como Administrador (1)
        domicilio: resto.domicilio,
        departamento: resto.departamento,
        puesto: resto.puesto,
        telefonos: resto.telefonos,
        correos: correo,
        referencias_familiares: resto.referencias_familiares
      });

      // Guardar el empleado en la base de datos
      await nuevoEmpleado.save();
      res.status(201).json(nuevoEmpleado);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'Error al registrar empleado', error });
    }
};

const getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.json(empleados);
  } catch (err) {
    res.status(500).send('Error al obtener los empleados');
  }
};

// Actualizar el rol de un usuario (baja temporal)
const updateRol = async (req, res) => {
  try {
    const { id } = req.params;
    const empleado = await Empleado.findById(id);

    if (!empleado) {
      return res.status(404).send('Usuario no encontrado');
    }

    // Cambiar el rol a 3 (baja temporal)
    empleado.rol = 3;
    await empleado.save();
    res.json({ message: 'Rol actualizado a baja temporal', empleado });
  } catch (err) {
    res.status(500).send('Error al actualizar el rol');
  }
};

// Eliminar un usuario (baja definitiva)
const deleteEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const empleado = await Empleado.findByIdAndDelete(id);

    if (!empleado) {
      return res.status(404).send('Usuario no encontrado');
    }

    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (err) {
    res.status(500).send('Error al eliminar el usuario');
  }
};

// Actualizar empleado
const actualizarEmpleado = async (req, res) => {
  try {
    const clave_empleado = req.params.clave_empleado;

    // Buscar y actualizar el empleado
    const empleadoActualizado = await Empleado.findOneAndUpdate(
      { clave_empleado },
      req.body,
      { new: true, runValidators: true }
    );

    if (!empleadoActualizado) {
      return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    }

    res.json(empleadoActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar empleado', error });
  }
};


module.exports = { crearEmpleado,getEmpleados,updateRol,deleteEmpleado,actualizarEmpleado};
