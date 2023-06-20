import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudante } from './estudante';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {
  getEstudante(id: number): Observable<Estudante> {
    return this.http.get<Estudante>(`${this.url}/${id}`);
  }

  constructor(private http: HttpClient) { }
   url = "http://localhost:3000/Estudante";

  getEstudantes(): Observable<Estudante[]>{
   
    return this.http.get<Estudante[]>(this.url);
  }

  save(estudante : Estudante): Observable<Estudante>{
    return this.http.post<Estudante>(this.url, estudante); 

  }

  update(estudante: Estudante): Observable<Estudante> {
    return this.http.put<Estudante>(`${this.url}/${estudante.id}`, estudante);
  }

  delete(estudante : Estudante): Observable<void>{
    return this.http.delete<void>(`${this.url}/${estudante.id}`); 

  }
}




