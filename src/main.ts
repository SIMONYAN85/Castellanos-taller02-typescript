console.log('Sistema de empleados iniciado correctamente.');
import { BaseEmployee } from "./classes/BaseEmployee";
import { Department } from "./interfaces/types";

const empleado = new BaseEmployee(
  1,
  "jeniffer",
  45,
  "daymoon7@gmail.com",
  "Femenino",
  "Desarrolladora",
  Department.IT,
  5000
);

console.log(empleado.getSummary());