import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Medico } from '../model/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private baseUrl = 'http://localhost:8080/medicos';
  constructor(private http: HttpClient) { }

  buscarMedicoPorId(id: number): Observable<Medico> {
    return this.http.get<Medico>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  buscarTodos(): Observable<Medico[]> {
    return this.http.get<Medico[]>(`${this.baseUrl}`).pipe(
      catchError(this.handleError)
    );
  }

  guardarMedico(medico: Medico): Observable<Medico> {
    return this.http.post<Medico>(`${this.baseUrl}`, medico).pipe(
      catchError(this.handleError)
    );
  }

  eliminarMedico(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<any> {
    console.error('Ocurrió un error:', error);
    return throwError(error);
  }
}
