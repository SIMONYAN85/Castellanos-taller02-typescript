import { BaseEmployee } from "./BaseEmployee";
import { User, Department } from "../interfaces/types";

export class Manager extends BaseEmployee {
  private teamSize: number;

  constructor(user: User, id: number, department: Department, teamSize: number) {
    super(user, id, department);
    this.teamSize = teamSize;
  }

  getDetails(): string {
    return `${this.name} lidera el departamento de ${this.department} con un equipo de ${this.teamSize} personas.`;
  }

  calculateSalary(): number {
    return 4000 + this.teamSize * 300;
  }
}