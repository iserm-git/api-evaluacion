const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// Obtener todos los alumnos
router.get("/", async (req, res) => {
  const students = await Student.findAll();
  res.json(students);
});

// Crear un nuevo alumno
router.post("/", async (req, res) => {
  const newStudent = await Student.create(req.body);
  res.json({ message: "Alumno creado", student: newStudent });
});

// Actualizar un alumno
router.put("/:idAlumno", async (req, res) => {
  const { idAlumno } = req.params;
  const student = await Student.findByPk(idAlumno);
  if (student) {
    await student.update(req.body);
    res.json({ message: "Alumno actualizado", student });
  } else {
    res.status(404).json({ message: "Alumno no encontrado" });
  }
});

// Eliminar un alumno
router.delete("/:idAlumno", async (req, res) => {
  const { idAlumno } = req.params;
  const student = await Student.findByPk(idAlumno);
  if (student) {
    await student.destroy();
    res.json({ message: "Alumno eliminado" });
  } else {
    res.status(404).json({ message: "Alumno no encontrado" });
  }
});

module.exports = router;
