import { User, Department } from "../interfaces/types";

export abstract class BaseEmployee {
  protected id: number;
  protected name: string;
  protected age: number;
  protected email: string;
  protected gender: string;
  protected department: Department;

  constructor(user: User, id: number, department: Department) {
    this.id = id;
    this.name = user.name;
    this.age = user.age;
    this.email = user.email;
    this.gender = user.gender;
    this.department = department;
  }

  //Getter para que los servicios puedan acceder al id
  public getId(): number {
    return this.id;
  }
  getDepartment(): Department {
  return this.department;
}
  // Getter opcional para el nombre
  public getName(): string {
    return this.name;
  }

  abstract getDetails(): string;
  abstract calculateSalary(): number;
}
