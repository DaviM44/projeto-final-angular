import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';
import { Professor } from '../professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  professores: Professor[] = [];

  constructor(private professorService: ProfessorService){}
  ngOnInit(): void {
    this.loadProfessores();
  }
  loadProfessores() {
    this.professorService.getProfessores().subscribe({
      next : data => this.professores = data
    }
    );
  }

}
