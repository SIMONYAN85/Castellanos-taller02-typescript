import { ApiService } from "./ApiService";
import { BaseEmployee } from "../classes/BaseEmployee";
import { Developer } from "../classes/Developer";
import { Manager } from "../classes/Manager";
import { Department } from "../interfaces/types";

// Validaciones básicas (Reto 1)
function esEmailValido(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function esEdadValida(age: number): boolean {
  return age > 0;
}

export class EmployeeService {
  private employees: BaseEmployee[] = [];

  constructor(private apiService: ApiService) {}

  async loadEmployeesFromApi(): Promise<void> {
    const users = await this.apiService.getUsers();

    // 🧹 Filtrar usuarios válidos
    const validUsers = users.filter(user =>
      esEmailValido(user.email) && esEdadValida(user.age)
    );

    if (validUsers.length >= 3) {
      //  Crear 2 developers
      const dev1 = new Developer(validUsers[0], 1, ["TypeScript", "React"]);
      const dev2 = new Developer(validUsers[1], 2, ["Node.js", "MongoDB"]);

      // Crear 1 manager con teamSize = 5
      const manager = new Manager(validUsers[2], 3, Department.MARKETING, 5);

      //  Agregar empleados al sistema
      this.addEmployee(dev1);
      this.addEmployee(dev2);
      this.addEmployee(manager);
    } else {
      console.warn("No hay suficientes usuarios válidos para crear empleados.");
    }
  }

  getEmployeeById(id: number): BaseEmployee | undefined {
    return this.employees.find(e => e.getId() === id);
  }

  getAllEmployees(): BaseEmployee[] {
    return this.employees;
  }

  addEmployee(employee: BaseEmployee): void {
    this.employees.push(employee);
  }
}