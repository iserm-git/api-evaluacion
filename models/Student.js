const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Student = sequelize.define(
  "Student",
  {
    idAlumno: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING,
    apellidoPaterno: DataTypes.STRING,
    apellidoMaterno: DataTypes.STRING,
    carrera: DataTypes.STRING,
    grupo: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: "students",
  }
);

module.exports = Student;
