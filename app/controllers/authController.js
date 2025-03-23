const Empleado = require("../models/empleadoModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const { clave, password } = req.body;
  

  try {
    // Buscar empleado por clave
    const empleado = await Empleado.findOne({ clave_empleado: clave });
    if (!empleado) {
      return res.status(404).json({ msg: "Empleado no encontrado" });
    }

    // Comparar contraseñas
    const passwordMatch = await bcrypt.compare(password, empleado.contrasenia);
    if (!passwordMatch) {
      return res.status(401).json({ msg: "Contraseña incorrecta" });
    }

    // Generar Token JWT
    const token = jwt.sign(
      { id: empleado._id, rol: empleado.rol, nombre: empleado.nombre },
      process.env.JWT_SECRET,
      { expiresIn: "8h" }
    );

    res.json({
      msg: "Inicio de sesión exitoso",
      token,
      usuario: {
        id: empleado._id,
        clave_empleado: empleado.clave_empleado,
        nombre: empleado.nombre,
        apellido_paterno: empleado.apellido_paterno,
        rol: empleado.rol,
        
      },
    });
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor", error });
  }
};
module.exports = { login };