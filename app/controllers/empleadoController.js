
// controllers/empleadoController.js
const Empleado = require('../models/empleadoModel');

// Función para crear un nuevo empleado
const crearEmpleado = async (req, res) => {
    const { nombre, apellido_paterno, apellido_materno, fecha_nacimiento, sexo, correo, clave_empleado, ...resto } = req.body;
  
    // Verifica si los campos requeridos están presentes
    if (!clave_empleado || !nombre || !apellido_paterno || !apellido_materno) {
      return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }
  
    try {
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
        contrasenia: resto.contrasenia,
        rol: 1,  // Definir el rol como Administrador (1)
        domicilio: resto.domicilio,
        departamento: resto.departamento,
        puesto: resto.puesto,
        telefonos: resto.telefonos,
        correos: correo,
        referencias_familiares: resto.referencias_familiares
      });
  
      await nuevoEmpleado.save();
      res.status(201).json(nuevoEmpleado);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'Error al registrar empleado', error });
    }
  };
  

module.exports = { crearEmpleado };
