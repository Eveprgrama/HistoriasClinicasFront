import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoriaClinica } from '../model/historia-clinica';
import { PacienteService } from './paciente.service';
import { switchMap } from 'rxjs/operators';
import { PacienteDTO } from '../model/paciente-dto';

@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaService {

  private baseUrl = 'http://localhost:8080/historiasclinicas';

  constructor(private http: HttpClient) { }

  
  getHistoriaClinicaById(id: number): Observable<HistoriaClinica> {
    return this.http.get<HistoriaClinica>(`${this.baseUrl}/${id}`);
  }

  createHistoriaClinica(historiaClinica: HistoriaClinica, pacienteId: number): Observable<HistoriaClinica> {
    return this.http.post<HistoriaClinica>(`${this.baseUrl}/nuevas/${pacienteId}`, historiaClinica);
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

  actualizarHistoriaClinica(historiaClinica: HistoriaClinica): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/${historiaClinica.id}/actualizaciones`, historiaClinica);
  }

  buscarPorId(id: number): Observable<PacienteDTO> {
    return this.http.get<PacienteDTO>(`${this.baseUrl}/existe/${id}`);
  }

}
