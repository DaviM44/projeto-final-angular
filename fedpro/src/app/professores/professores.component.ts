import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';
import { Professor } from '../professor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  professores: Professor[] = [];
  isEditing : boolean = false;
 professor : Professor = {} as Professor;

  constructor(private professorService: ProfessorService)
{
}
 
    ngOnInit(): void {
    this.loadProfessores();
  }
  loadProfessores() {
    this.professorService.getProfessores().subscribe({
      next : data => this.professores = data
    }
    );
  }

  onSaveEvent(professor: Professor){

      if(this.isEditing){
    this.professorService.update(professor).subscribe({
      next: () => {this.loadProfessores();
        this.isEditing = false;
      }
    })
  }
     else{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    this.professorService.save(professor).subscribe(
      {
        next: data => {this.professores.push(data);
      }
      }
    );
     }
    

    
  }

  edit(professor : Professor){
    this.isEditing = true;
    this.professor = professor;
  }

  delete(professor : Professor){
    this.professorService.delete(professor).subscribe(
      {
        next: () => this.loadProfessores()
      }
    )
  }

  

  




}
