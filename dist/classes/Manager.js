"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const BaseEmployee_1 = require("./BaseEmployee");
class Manager extends BaseEmployee_1.BaseEmployee {
    constructor(user, id, department, teamSize) {
        super(user, id, department);
        this.teamSize = teamSize;
    }
    getDetails() {
        return `${this.name} lidera el departamento de ${this.department} con un equipo de ${this.teamSize} personas.`;
    }
    calculateSalary() {
        return 4000 + this.teamSize * 300;
    }
}
exports.Manager = Manager;
