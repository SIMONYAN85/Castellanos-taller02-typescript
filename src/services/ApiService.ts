import { User } from "../interfaces/types";

export class ApiService {
  private apiUrl = "https://dummyjson.com/users";

  async getUsers(): Promise<User[]> {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();

      // Mapear solo los campos necesarios
      return data.users.map((user: any) => ({
        name: user.firstName,
        age: user.age,
        email: user.email,
        gender: user.gender
      }));
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      return [];
    }
  }

  async getUserById(id: number): Promise<User | null> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`);
      const user = await response.json();

      return {
        name: user.firstName,
        age: user.age,
        email: user.email,
        gender: user.gender
      };
    } catch (error) {
      console.error("Error al obtener usuario por ID:", error);
      return null;
    }
  }
}