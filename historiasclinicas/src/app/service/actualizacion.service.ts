import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actualizacion } from '../model/actualizacion';

@Injectable({
  providedIn: 'root'
})
export class ActualizacionService {

  private baseUrl = 'http://localhost:8080/actualizaciones';

  constructor(private http: HttpClient) { }

  guardarActualizacion(historiaClinicaId: number, actualizacion: Actualizacion): Observable<Actualizacion> {
    return this.http.post<Actualizacion>(`${this.baseUrl}/${historiaClinicaId}`, actualizacion);
  }

  buscarActualizacionPorId(id: number): Observable<Actualizacion> {
    return this.http.get<Actualizacion>(`${this.baseUrl}/${id}`);
  }

  buscarActualizacionesPorHistoriaClinica(historiaClinicaId: number): Observable<Actualizacion[]> {
    return this.http.get<Actualizacion[]>(`${this.baseUrl}/historiaClinica/${historiaClinicaId}`);
  }

  eliminarActualizacion(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/${id}`);
  }
}
