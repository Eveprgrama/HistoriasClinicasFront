import { Actualizacion } from "./actualizacion";
import { ArchivoHistoriaClinica } from "./archivo-historia-clinica";
import { PacienteDTO } from "./paciente-dto";

export class HistoriaClinica {
    id: number;
  fechaCreacion: string;
  enfermedad: string;
  descripcion: string;
  medicacion: string;
  peso: string;
  altura: string;
  indicaciones: string;
  paciente: PacienteDTO;
  archivosHistoriaClinica: ArchivoHistoriaClinica[];
  actualizaciones: Actualizacion[];

  constructor(
    id: number,
    fechaCreacion: string,
    enfermedad: string,
    descripcion: string,
    medicacion: string,
    peso: string,
    altura: string,
    indicaciones: string,
    paciente: PacienteDTO,
    archivosHistoriaClinica: ArchivoHistoriaClinica[],
    actualizaciones: Actualizacion[]
  ) {
    this.id = id;
    this.fechaCreacion = fechaCreacion;
    this.enfermedad = enfermedad;
    this.descripcion = descripcion;
    this.medicacion = medicacion;
    this.peso = peso;
    this.altura = altura;
    this.indicaciones = indicaciones;
    this.paciente = paciente;
    this.archivosHistoriaClinica = archivosHistoriaClinica;
    this.actualizaciones = actualizaciones;
  }
}
