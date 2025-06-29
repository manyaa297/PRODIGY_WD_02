const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  position: String,
  department: String
});

module.exports = mongoose.model('Employee', employeeSchema);