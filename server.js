// server.js
require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');
const empleadoRoutes = require('./app/routes/empleadoRoutes');
const departamentoRoutes = require('./app/routes/departamentoRoutes');
const puestoRouter=  require("./app/routes/puestoRoutes");
const documentoRouter=require("./app/routes/documentoRoutes");
const actividadRoutes=require("./app/routes/actividadRoutes");
const ciudadRoutes= require("./app/routes/ciudadRoutes");
const parentescoRoutes= require("./app/routes/parentescoRoutes");
const login=require("./app/routes/authRoutes");
const cursoRoutes= require("./app/routes/cursoRoutes");
const app = express();



// Conectar a la base de datos
conectarDB();

// Middleware para procesar JSON
app.use(express.json());
app.use(cors());
// Rutas
app.use('/api', empleadoRoutes);
app.use('/api', departamentoRoutes);
app.use("/api", puestoRouter);
app.use("/api", documentoRouter);
app.use("/api", actividadRoutes );
app.use("/api", ciudadRoutes);
app.use("/api", parentescoRoutes);
app.use("/api", login);
app.use('/api', cursoRoutes);
// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
