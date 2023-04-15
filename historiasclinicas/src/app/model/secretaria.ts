export class Secretaria {
    id: number;
    nombre: string;
    apellido: string;
    password: string;
    role: string;

    constructor(id: number, nombre: string, apellido: string, password: string, role: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.password = password;
        this.role = role;
    }
}
