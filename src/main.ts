import { BaseEmployee } from "./classes/BaseEmployee";
import { Department } from "./interfaces/types";

console.log("Sistema de empleados iniciado correctamente.");

//Lista de empleados
const empleados: BaseEmployee[] = [
  new BaseEmployee(1, "Jeniffer", 45, "jenaP@gmail.com", "Femenino", "Desarrolladora", Department.IT, 5000),
  new BaseEmployee(2, "Josefa", 32, "josefinanda@gmail.com", "Femenino", "Analista de datos", Department.MARKETING, 4000),
  new BaseEmployee(3, "Juan", 28, "ana@example.com", "Masculino", "RRHH", Department.HR, 3500)
];

// 🧪 Visualización en consola
empleados.forEach(e => {
  console.log(e.getSummary());
});