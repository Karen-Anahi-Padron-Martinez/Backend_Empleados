const mongoose = require("mongoose");

const ciudadSchema = new mongoose.Schema({
    ciudad: { type: String, required: true }
    
  }, { collection: 'ciudades' }); 

const Ciudad = mongoose.model("Ciudad", ciudadSchema);

module.exports = Ciudad;

