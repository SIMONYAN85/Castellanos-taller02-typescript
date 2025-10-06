import { BaseEmployee } from "./BaseEmployee";
import { User, Department } from "../interfaces/types";

export class Developer extends BaseEmployee {
  private programmingLanguages: string[];

  constructor(user: User, id: number, languages: string[]) {
    super(user, id, Department.IT); // Siempre IT
    this.programmingLanguages = languages;
  }

  getDetails(): string {
    return `${this.name} trabaja en ${this.department} como Desarrolladora. Lenguajes: ${this.programmingLanguages.join(", ")}`;
  }

  calculateSalary(): number {
    return 3000 + this.programmingLanguages.length * 200;
  }
}