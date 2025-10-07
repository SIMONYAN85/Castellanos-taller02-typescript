"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiService_1 = require("./services/ApiService");
const EmployeeService_1 = require("./services/EmployeeService");
const Developer_1 = require("./classes/Developer");
const Manager_1 = require("./classes/Manager");
const types_1 = require("./interfaces/types");
async function main() {
    try {
        const apiService = new ApiService_1.ApiService();
        const employeeService = new EmployeeService_1.EmployeeService(apiService);
        // Cargar empleados desde la API
        await employeeService.loadEmployeesFromApi();
        // Agregar empleados manuales
        employeeService.addEmployee(new Developer_1.Developer({ name: "Jeniffer", age: 45, email: "jenaP@gmail.com", gender: "Femenino" }, 10, ["Java", "SQL"]));
        employeeService.addEmployee(new Developer_1.Developer({ name: "Josefa", age: 32, email: "josefinanda@gmail.com", gender: "Femenino" }, 11, ["Python"]));
        employeeService.addEmployee(new Manager_1.Manager({ name: "Juan", age: 66, email: "juanito8@gmail.com", gender: "Masculino" }, 12, types_1.Department.HR, 3));
        // Mostrar todos los empleados
        const employees = employeeService.getAllEmployees();
        console.log("=== SISTEMA DE EMPLEADOS ===");
        employees.forEach(e => {
            console.log(e.getDetails());
            console.log(`Salario calculado: $${e.calculateSalary()}`);
            console.log("----------------------------");
        });
    }
    catch (error) {
        console.error("Error:", error);
    }
}
main();
