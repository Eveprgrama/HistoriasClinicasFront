import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { PacienteDTO } from '../model/paciente-dto';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private baseUrl = 'http://localhost:8080/pacientes'
  constructor(private http: HttpClient) { }

    // Método para obtener todos los pacientes
    obtenerTodos(): Observable<PacienteDTO[]> {
      return this.http.get<PacienteDTO[]>(`${this.baseUrl}/todos`);
    }
  
  buscarPorDni(dni: string): Observable<PacienteDTO> {
    return this.http.get<PacienteDTO>(`${this.baseUrl}/${dni}`);
  }

  buscarPorNombreYApellido(nombre: string, apellido: string): Observable<PacienteDTO[]> {
    const nombreCodificado = encodeURIComponent(nombre);
    const apellidoCodificado = encodeURIComponent(apellido);
    return this.http.get<PacienteDTO[]>(`${this.baseUrl}/lista?nombre=${nombreCodificado}&apellido=${apellidoCodificado}`);
  }

  guardarPaciente(paciente: PacienteDTO): Observable<PacienteDTO> {
    return this.http.post<PacienteDTO>(`${this.baseUrl}/nuevo`, paciente);
  }

  eliminarPaciente(dni: string): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/eliminar/${dni}`);
  }

  buscarPaciente(nombre: string, apellido: string, dni: string): Observable<string | PacienteDTO | PacienteDTO[]> {
    let params = new HttpParams();
    if (nombre && apellido) {
      params = params.set('nombre', nombre);
      params = params.set('apellido', apellido);
      return this.http.get<PacienteDTO[]>(`${this.baseUrl}/lista`, { params }).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            return of("No se encontró el paciente, ¿desea crear uno nuevo?");
          } else {
            return throwError(error);
          }
        })
      ) as Observable<PacienteDTO[]>;
    } else if (dni) {
      return this.http.get<PacienteDTO>(`${this.baseUrl}/${dni}`).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            return of("No se encontró el paciente, ¿desea crear uno nuevo?");
          } else {
            return throwError(error);
          }
        })
      ) as Observable<PacienteDTO>;
    } else {
      return throwError('Debes proporcionar al menos nombre y apellido, o dni.') as Observable<string>;
    }
  }

  
}








