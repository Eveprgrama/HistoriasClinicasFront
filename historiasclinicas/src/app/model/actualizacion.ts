import { HistoriaClinica } from "./historia-clinica";

export class Actualizacion {
    id: number;
    fecha: Date;
    descripcion: string;
    historiaClinica: HistoriaClinica;

    constructor(id: number, fecha: Date, descripcion: string, historiaClinica: HistoriaClinica) {
        this.id = id;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.historiaClinica = historiaClinica;
    }
}
