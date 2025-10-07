import { ApiService } from "./services/ApiService";
import { EmployeeService } from "./services/EmployeeService";
import { Developer } from "./classes/Developer";
import { Manager } from "./classes/Manager";
import { Department } from "./interfaces/types";

async function main(): Promise<void> {
  try {
    const apiService = new ApiService();
    const employeeService = new EmployeeService(apiService);

    // Cargar empleados desde la API
    await employeeService.loadEmployeesFromApi();

    // Agregar empleados manuales
    employeeService.addEmployee(
      new Developer({ name: "Jeniffer", age: 45, email: "jenaP@gmail.com", gender: "Femenino" }, 10, ["Java", "SQL"])
    );
    employeeService.addEmployee(
      new Developer({ name: "Josefa", age: 32, email: "josefinanda@gmail.com", gender: "Femenino" }, 11, ["Python"])
    );
    employeeService.addEmployee(
      new Manager({ name: "Juan", age: 66, email: "juanito8@gmail.com", gender: "Masculino" }, 12, Department.HR, 3)
    );

    // Mostrar todos los empleados
    const employees = employeeService.getAllEmployees();
    console.log("=== SISTEMA DE EMPLEADOS ===");
    employees.forEach(e => {
      console.log(e.getDetails());
      console.log(`Salario calculado: $${e.calculateSalary()}`);
      console.log("----------------------------");
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
