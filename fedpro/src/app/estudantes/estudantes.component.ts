import { Component, OnInit } from '@angular/core';
import { EstudanteService } from '../estudante.service';
import { Estudante } from '../estudante';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {

  estudantes: Estudante[] = [];
  isEditing : boolean = false;
 estudante : Estudante = {} as Estudante;

  constructor(private estudanteService: EstudanteService)
{
}
 
    ngOnInit(): void {
    this.loadEstudantes();
  }
  loadEstudantes() {
    this.estudanteService.getEstudantes().subscribe({
      next : data => this.estudantes = data
    }
    );
  }

  onSaveEvent(estudante: Estudante){

      if(this.isEditing){
    this.estudanteService.update(estudante).subscribe({
      next: () => {this.loadEstudantes();
        this.isEditing = false;
      }
    })
  }
     else{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    this.estudanteService.save(estudante).subscribe(
      {
        next: data => {this.estudantes.push(data);
      }
      }
    );
     }
    

    
  }

  edit(estudante : Estudante){
    this.isEditing = true;
    this.estudante = estudante;
  }

  delete(estudante : Estudante){
    this.estudanteService.delete(estudante).subscribe(
      {
        next: () => this.loadEstudantes()
      }
    )
  }

  

  




}
