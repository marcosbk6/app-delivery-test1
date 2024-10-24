import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prato } from '../models/prato.model';

@Injectable({
  providedIn: 'root'
})
export class PratoService {
  private apiUrl = 'http://localhost:8080/api/pratos'; // URL do backend para listar pratos

  constructor(private http: HttpClient) {}

  // Método para obter pratos do backend
  getPratos(): Observable<Prato[]> {
    return this.http.get<Prato[]>(this.apiUrl);
  }
}
