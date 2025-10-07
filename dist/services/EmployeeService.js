"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const Developer_1 = require("../classes/Developer");
const Manager_1 = require("../classes/Manager");
const types_1 = require("../interfaces/types");
// Validaciones básicas (Reto 1)
function esEmailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function esEdadValida(age) {
    return age > 0;
}
class EmployeeService {
    constructor(apiService) {
        this.apiService = apiService;
        this.employees = [];
    }
    async loadEmployeesFromApi() {
        const users = await this.apiService.getUsers();
        // 🧹 Filtrar usuarios válidos
        const validUsers = users.filter(user => esEmailValido(user.email) && esEdadValida(user.age));
        if (validUsers.length >= 3) {
            //  Crear 2 developers
            const dev1 = new Developer_1.Developer(validUsers[0], 1, ["TypeScript", "React"]);
            const dev2 = new Developer_1.Developer(validUsers[1], 2, ["Node.js", "MongoDB"]);
            // Crear 1 manager con teamSize = 5
            const manager = new Manager_1.Manager(validUsers[2], 3, types_1.Department.MARKETING, 5);
            //  Agregar empleados al sistema
            this.addEmployee(dev1);
            this.addEmployee(dev2);
            this.addEmployee(manager);
        }
        else {
            console.warn("No hay suficientes usuarios válidos para crear empleados.");
        }
    }
    getEmployeeById(id) {
        return this.employees.find(e => e.getId() === id);
    }
    getAllEmployees() {
        return this.employees;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
exports.EmployeeService = EmployeeService;
