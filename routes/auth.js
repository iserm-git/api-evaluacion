const express = require("express");
const bcrypt = require("bcrypt"); // para comparar contraseñas
const router = express.Router();
const User = require("../models/User"); // importar el modelo de usuario

// Ruta para iniciar sesión
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar el usuario en la base de datos por nombre de usuario
    const user = await User.findOne({ where: { username } });

    // Si el usuario no existe, devolver un error de autenticación
    if (!user) {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    // Comparar la contraseña ingresada con la almacenada
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    // Si la autenticación es exitosa, devolver la información del usuario
    res.json({
      message: "Inicio de sesión exitoso",
      user: { id: user.id, username: user.username, role: user.role },
    });
  } catch (error) {
    console.error("Error al autenticar el usuario:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
});

module.exports = router;
