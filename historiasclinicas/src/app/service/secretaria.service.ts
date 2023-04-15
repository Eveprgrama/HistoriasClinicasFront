import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Secretaria } from '../model/secretaria';

@Injectable({
  providedIn: 'root'
})
export class SecretariaService {

  private baseUrl = 'http://localhost:8080/secretarias';

  constructor(private http: HttpClient) { }

  buscarPorId(id: number): Observable<Secretaria> {
    return this.http.get<Secretaria>(`${this.baseUrl}/${id}`);
  }

  buscarTodos(): Observable<Secretaria[]> {
    return this.http.get<Secretaria[]>(this.baseUrl);
  }

  guardar(secretaria: Secretaria): Observable<Secretaria> {
    return this.http.post<Secretaria>(this.baseUrl, secretaria);
  }

  eliminar(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/${id}`);
  }
}
