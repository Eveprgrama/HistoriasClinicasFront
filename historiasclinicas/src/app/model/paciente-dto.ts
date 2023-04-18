import { HistoriaClinica } from "./historia-clinica";

export class PacienteDTO {
  id?: number;
  nombre: string;
  apellido: string;
  dni: string;
  fechaNacimiento: string; 
  direccion: string;
  telefono: string;
  email: string;
  historiasClinicas: HistoriaClinica[]; // Aquí asumimos que HistoriaClinicaDTO es el DTO correspondiente para las historias clínicas 

  constructor(
    id: number,
    nombre: string,
    apellido: string,
    dni: string,
    fechaNacimiento: string,
    direccion: string,
    telefono: string,
    email: string,
    historiasClinicas: HistoriaClinica[]
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.fechaNacimiento = fechaNacimiento;
    this.direccion = direccion;
    this.telefono = telefono;
    this.email = email;
    this.historiasClinicas = historiasClinicas;
  }
}
