export class Medicacion {
  id?: number;
  nombreMedicacion: string;
  droga: string;
  dosis: string;

  constructor(
    id: number,
    nombreMedicacion: string,
    droga: string,
    dosis: string
  ){
    this.id = id;
    this.nombreMedicacion = nombreMedicacion;
    this.droga = droga;
    this.dosis = dosis;
  }
}
