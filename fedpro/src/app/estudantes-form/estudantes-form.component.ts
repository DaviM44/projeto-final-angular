import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudante } from '../estudante';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudanteService } from '../estudante.service';

@Component({
  selector: 'app-estudantes-form',
  templateUrl: './estudantes-form.component.html',
  styleUrls: ['./estudantes-form.component.css']
})
export class EstudantesFormComponent implements OnInit {
  formGroupEst : FormGroup;
  submitted: boolean = false;
  
  estudante: Estudante = {} as Estudante;

  constructor(private formBuilder : FormBuilder,
    private estudanteService: EstudanteService,
    private route : ActivatedRoute,
    private router : Router
    ){

      this.formGroupEst = formBuilder.group({
        id : [''],
        name : ['',[Validators.required]],
        email: ['',[Validators.required, Validators.email]]
      });
    }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get("id"));
        this.getClientById(id);
    }
  getClientById(id: number) {
this.estudanteService.getEstudante(id).subscribe({
  next: data => {this.formGroupEst.setValue(data);}
})
 }
  

    get name() : any {
      return this.formGroupEst.get("name");
    }
  
    get email() : any {
      return this.formGroupEst.get("email");
    }

    clean(){
      this.formGroupEst.reset();
      this.submitted = false;
    }

    save(){
      this.submitted = true;
      if(this.formGroupEst.valid){
        this.estudanteService.update(this.formGroupEst.value).subscribe({
          next: () => {
            this.router.navigate(['estudantes'])
          }
        })
        
      }
    }


}
