import { HistoriaClinica } from "./historia-clinica";

export class ArchivoHistoriaClinica {
    id: number;
    nombre: string;
    tipo: string;
    archivo: string;
    historiaClinica: HistoriaClinica;

    constructor(id: number, nombre: string, tipo: string, archivo: string, historiaClinica: HistoriaClinica) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.archivo = archivo;
        this.historiaClinica = historiaClinica;
    }
}
