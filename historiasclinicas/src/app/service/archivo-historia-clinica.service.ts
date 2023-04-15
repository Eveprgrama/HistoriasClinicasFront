import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ArchivoHistoriaClinica } from '../model/archivo-historia-clinica';

@Injectable({
  providedIn: 'root'
})
export class ArchivoHistoriaClinicaService {

  private baseUrl = 'http://localhost:8080/historiasclinicas/archivos';

  constructor(private http: HttpClient) { }

  
  obtenerArchivoHistoriaClinica(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(`${this.baseUrl}/${id}`, { responseType: 'arraybuffer', headers: headers }).pipe(
      catchError((error: any) => {
        // Manejo de errores aquí, si es necesario
        console.error('Error al obtener archivo de historia clínica:', error);
        throw error;
      })
    );
  }

  guardarArchivoHistoriaClinica(file: File, historiaClinicaId: number): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/nuevo/${historiaClinicaId}`, formData).pipe(
      catchError((error: any) => {
        // Manejo de errores aquí, si es necesario
        console.error('Error al guardar archivo de historia clínica:', error);
        throw error;
      })
    );
  }

  eliminarArchivoHistoriaClinica(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`).pipe(
      catchError((error: any) => {
        // Manejo de errores aquí, si es necesario
        console.error('Error al eliminar archivo de historia clínica:', error);
        throw error;
      })
    );
  }
}
