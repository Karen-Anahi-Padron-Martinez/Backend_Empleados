const mongoose = require("mongoose");

const parentescoSchema = new mongoose.Schema({
    parentesco: { type: String, required: true }
    
  }, { collection: 'parentesco' }); 

const Parentesco = mongoose.model("Parentesco", parentescoSchema);

module.exports = Parentesco;