export class Medico {
    id: number;
    nombre: string;
    apellido: string;
    matricula: string;
    especialidad: string;

    constructor(id: number, nombre: string, apellido: string, matricula: string, especialidad: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.matricula = matricula;
        this.especialidad = especialidad;
    }
}
