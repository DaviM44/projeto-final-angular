import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudante } from '../estudante';

@Component({
  selector: 'app-estudantes-form',
  templateUrl: './estudantes-form.component.html',
  styleUrls: ['./estudantes-form.component.css']
})
export class EstudantesFormComponent implements OnChanges {
  formGroupEst : FormGroup;
  submitted: boolean = false;
  
  @Input()
  estudante: Estudante = {} as Estudante;

  @Output()
  saveEvent = new EventEmitter<Estudante>();

  constructor(private formBuilder : FormBuilder
    ){

      this.formGroupEst = formBuilder.group({
        id : [''],
        name : ['',[Validators.required]],
        email: ['',[Validators.required, Validators.email]]
      });
    }
  ngOnChanges(changes: SimpleChanges): void {
    this.formGroupEst.setValue(this.estudante);
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
        this.saveEvent.emit(this.formGroupEst.value);
        this.formGroupEst.reset();
        this.submitted = false;
      }
    }


}
