"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
class ApiService {
    constructor() {
        this.apiUrl = "https://dummyjson.com/users";
    }
    async getUsers() {
        try {
            const response = await fetch(this.apiUrl);
            const data = await response.json();
            // Mapear solo los campos necesarios
            return data.users.map((user) => ({
                name: user.firstName,
                age: user.age,
                email: user.email,
                gender: user.gender
            }));
        }
        catch (error) {
            console.error("Error al obtener usuarios:", error);
            return [];
        }
    }
    async getUserById(id) {
        try {
            const response = await fetch(`${this.apiUrl}/${id}`);
            const user = await response.json();
            return {
                name: user.firstName,
                age: user.age,
                email: user.email,
                gender: user.gender
            };
        }
        catch (error) {
            console.error("Error al obtener usuario por ID:", error);
            return null;
        }
    }
}
exports.ApiService = ApiService;
