import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from './professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http: HttpClient) { }


  getProfessores(): Observable<Professor[]>{
    let url = "http://localhost:3000/Professor";
    return this.http.get<Professor[]>(url);
  }

  
}


