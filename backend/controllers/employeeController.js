const Employee = require('../models/Employee');

exports.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

exports.addEmployee = async (req, res) => {
  const { name, email, position, department } = req.body;
  const newEmp = new Employee({ name, email, position, department });
  await newEmp.save();
  res.json(newEmp);
};

exports.updateEmployee = async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Deleted' });
};