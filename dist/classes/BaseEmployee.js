"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEmployee = void 0;
class BaseEmployee {
    constructor(user, id, department) {
        this.id = id;
        this.name = user.name;
        this.age = user.age;
        this.email = user.email;
        this.gender = user.gender;
        this.department = department;
    }
    //Getter para que los servicios puedan acceder al id
    getId() {
        return this.id;
    }
    getDepartment() {
        return this.department;
    }
    // Getter opcional para el nombre
    getName() {
        return this.name;
    }
}
exports.BaseEmployee = BaseEmployee;
