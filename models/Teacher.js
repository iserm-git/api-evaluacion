const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Teacher = sequelize.define(
  "Teacher",
  {
    idDocente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING,
    apellidoPaterno: DataTypes.STRING,
    apellidoMaterno: DataTypes.STRING,
    carrera: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: "teachers",
  }
);

module.exports = Teacher;
