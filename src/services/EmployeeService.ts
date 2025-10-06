import { ApiService } from "./ApiService";
import { BaseEmployee } from "../classes/BaseEmployee";
import { Developer } from "../classes/Developer";
import { Manager } from "../classes/Manager";
import { Department } from "../interfaces/types";

export class EmployeeService {
  private employees: BaseEmployee[] = [];

  constructor(private apiService: ApiService) {}

  async loadEmployeesFromApi(): Promise<void> {
    const users = await this.apiService.getUsers();

    if (users.length >= 3) {
      // Crear 2 developers
      this.employees.push(new Developer(users[0], 1, ["TypeScript", "React"]));
      this.employees.push(new Developer(users[1], 2, ["Node.js", "MongoDB"]));

      // Crear 1 manager
      this.employees.push(new Manager(users[2], 3, Department.MARKETING, 5));
    }
  }

  getEmployeeById(id: number): BaseEmployee | undefined {
    return this.employees.find(e => e.id === id);
  }

  getAllEmployees(): BaseEmployee[] {
    return this.employees;
  }

  addEmployee(employee: BaseEmployee): void {
    this.employees.push(employee);
  }
}
