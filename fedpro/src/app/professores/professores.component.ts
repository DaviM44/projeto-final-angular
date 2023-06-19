import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';
import { Professor } from '../professor';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  professores: Professor[] = [];

  formGroupProf : FormGroup;

  constructor(private professorService: ProfessorService,
              private formBuilder : FormBuilder
              ){

                this.formGroupProf = formBuilder.group({
                  id : [''],
                  name : [''],
                  email: ['']
                });
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

  save(){
    this.professorService.save(this.formGroupProf.value).subscribe(
      {
        next: data => {this.professores.push(data);
        this.formGroupProf.reset();}
      }
    );
  }

  edit(professor:Professor){

  }

  delete(professor:Professor){
    this.professorService.delete(professor).subscribe(
      {
        next: () => this.loadProfessores()
      }
    )
  }

}
