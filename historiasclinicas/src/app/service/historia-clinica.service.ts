import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoriaClinica } from '../model/historia-clinica';

@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaService {

  private baseUrl = 'http://localhost:8080/historiasclinicas';

  constructor(private http: HttpClient) { }

  getHistoriaClinicaById(id: number): Observable<HistoriaClinica> {
    return this.http.get<HistoriaClinica>(`${this.baseUrl}/${id}`);
  }

  createHistoriaClinica(historiaClinica: HistoriaClinica): Observable<HistoriaClinica> {
    return this.http.post<HistoriaClinica>(`${this.baseUrl}/nueva`, historiaClinica);
  }

  updateHistoriaClinica(id: number, historiaClinica: HistoriaClinica): Observable<HistoriaClinica> {
    return this.http.put<HistoriaClinica>(`${this.baseUrl}/${id}`, historiaClinica);
  }

  deleteHistoriaClinica(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getHistoriasClinicasByDni(dni: string): Observable<HistoriaClinica> {
    return this.http.get<HistoriaClinica>(`${this.baseUrl}/paciente/${dni}`);
  }

  getHistoriasClinicasByNombreYApellido(nombre: string, apellido: string): Observable<HistoriaClinica[]> {
    return this.http.get<HistoriaClinica[]>(`${this.baseUrl}/paciente?nombre=${nombre}&apellido=${apellido}`);
  }

  actualizarHistoriaClinica(historiaClinicaDTO: any): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/${historiaClinicaDTO.id}/actualizaciones`, historiaClinicaDTO);
  }
}
