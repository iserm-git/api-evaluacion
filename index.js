// index.js
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database"); // Importar la conexión a la base de datos
const bcrypt = require("bcrypt");
require("dotenv").config();

const app = express();

// Middlewares
// const path = require("path");

// app.use(express.static(path.join(__dirname, "client/build"))); // Ruta hacia el build de React

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/build", "index.html"));
// });

app.use(cors());
app.use(express.json());

// Rutas
const authRoutes = require("./routes/auth");
const evaluationRoutes = require("./routes/evaluations");
const teacherRoutes = require("./routes/teachers");
const studentRoutes = require("./routes/students");

app.use("/api/auth", authRoutes);
app.use("/api/evaluations", evaluationRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/students", studentRoutes);

// Sincronizar los modelos con la base de datos MySQL
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Conexión a la base de datos establecida.");
  })
  .catch((err) => {
    console.error("Error conectando a la base de datos:", err);
  });

// Puerto de la aplicación
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
