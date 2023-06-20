import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from './professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http: HttpClient) { }
   url = "http://localhost:3000/Professor";

  getProfessores(): Observable<Professor[]>{
   
    return this.http.get<Professor[]>(this.url);
  }

  save(professor : Professor): Observable<Professor>{
    return this.http.post<Professor>(this.url, professor); 

  }

  update(professor: Professor): Observable<Professor> {
    return this.http.put<Professor>(`${this.url}/${professor.id}`, professor);
  }

  delete(professor : Professor): Observable<void>{
    return this.http.delete<void>(`${this.url}/${professor.id}`); 

  }
}




