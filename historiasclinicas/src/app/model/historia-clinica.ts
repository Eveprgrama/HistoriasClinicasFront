import { Actualizacion } from "./actualizacion";
import { ArchivoHistoriaClinica } from "./archivo-historia-clinica";
import { Medicacion } from "./medicacion";
import { PacienteDTO } from "./paciente-dto";


export class HistoriaClinica {
  id?: number;
  fechaCreacion: string;
  enfermedad: string;
  descripcion: string;
  medicacion: Medicacion[];
  peso: number;
  altura: number;
  indicaciones: string;
  pacienteId: number;
  actualizaciones: Actualizacion[]; 
  archivos: ArchivoHistoriaClinica[];

  constructor(
    id: number,
    fechaCreacion: string,
    enfermedad: string,
    descripcion: string,
    medicacion: Medicacion[],
    peso: number,
    altura: number,
    indicaciones: string,
    pacienteId: number,
    actualizaciones: Actualizacion[], 
    archivos: ArchivoHistoriaClinica[]
  ) {
    this.pacienteId = pacienteId;
    this.archivos = archivos;
    this.fechaCreacion = fechaCreacion;
    this.enfermedad = enfermedad;
    this.descripcion = descripcion;
    this.medicacion = medicacion;
    this.peso = peso;
    this.altura = altura;
    this.indicaciones = indicaciones;
    this.actualizaciones = actualizaciones;
  }
}

  