import { Employee, Department } from "../interfaces/types";

export class BaseEmployee implements Employee {
  constructor(
    public id: number,
    public name: string,
    public age: number,
    public email: string,
    public gender: string,
    public position: string,
    public department: Department,
    public salary: number
  ) {}

  getSummary(): string {
    return `${this.name} trabaja en ${this.department} como ${this.position}.`;
  }
}