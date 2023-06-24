import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Professor } from '../professor';

@Component({
  selector: 'app-professor-form',
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.css']
})
export class ProfessorFormComponent implements OnChanges {
  formGroupProf : FormGroup;
  submitted: boolean = false;
  
  @Input()
  professor: Professor = {} as Professor;

  @Output()
  saveEvent = new EventEmitter<Professor>();

  @Output()
  cleanEvent = new EventEmitter<void>();

  constructor(private formBuilder : FormBuilder
    ){

      this.formGroupProf = formBuilder.group({
        id : [''],
        name : ['',[Validators.required]],
        email: ['',[Validators.required, Validators.email]],
        materia: ['',[Validators.required]]
      });
    }
  ngOnChanges(changes: SimpleChanges): void {
    this.formGroupProf.setValue(this.professor);
  }

    get name() : any {
      return this.formGroupProf.get("name");
    }
  
    get email() : any {
      return this.formGroupProf.get("email");
    }

    clean(){
      this.formGroupProf.reset();
      this.submitted = false;
    }

    save(){
      this.submitted = true;
      if(this.formGroupProf.valid){
        this.saveEvent.emit(this.formGroupProf.value);
        this.formGroupProf.reset();
        this.submitted = false;
      }
    }


}
