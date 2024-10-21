import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PratoService {
  private apiUrl = 'http://localhost:8080/api/pratos'; // URL do backend para listar pratos

  constructor(private http: HttpClient) {}

  // Método para obter pratos do backend
  getPratos(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/pratos');
  }
}
