// seedUsers.js
const bcrypt = require("bcrypt");
const sequelize = require("./config/database");
const User = require("./models/User");

async function seed() {
  try {
    await sequelize.sync(); // Sincronizar modelos

    const hashedPassword = await bcrypt.hash("1", 10);

    await User.destroy({ where: {} }); // Elimina todos los registros en la tabla

    await User.bulkCreate([
      { username: "admin", password: hashedPassword, role: "admin" },
      { username: "user1", password: hashedPassword, role: "user" },
      { username: "user2", password: hashedPassword, role: "user" },
    ]);

    console.log("Usuarios creados exitosamente.");
  } catch (error) {
    console.error("Error al crear usuarios:", error);
  } finally {
    await sequelize.close();
  }
}

seed();
