const express = require("express");
const router = express.Router();

// Simulación de evaluaciones
let evaluations = [
  { id: 1, title: "Evaluación 1", questions: ["Pregunta 1", "Pregunta 2"] },
  { id: 2, title: "Evaluación 2", questions: ["Pregunta 1", "Pregunta 2"] },
];

// Obtener todas las evaluaciones
router.get("/", (req, res) => {
  res.json(evaluations);
});

// Crear una nueva evaluación
router.post("/", (req, res) => {
  const newEvaluation = req.body;
  evaluations.push({ id: evaluations.length + 1, ...newEvaluation });
  res.json({ message: "Evaluación creada", evaluation: newEvaluation });
});

module.exports = router;
