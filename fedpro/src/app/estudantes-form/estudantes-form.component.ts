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
  isEditing: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private estudanteService: EstudanteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formGroupEst = formBuilder.group({
      id : [''],
        name : ['',[Validators.required]],
        email: ['',[Validators.required, Validators.email]],
        curso : ['',[Validators.required]]
    });
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getEstudanteById(id);
  }

  getEstudanteById(id: number) {
    this.estudanteService.getEstudante(id).subscribe({
      next: (data) => {
        this.formGroupEst.setValue(data);
        this.isEditing = true;
      },
    });
  }

  save() {
    this.submitted = true;
    if (this.formGroupEst.valid) {
      if (this.isEditing) {
        this.estudanteService.update(this.formGroupEst.value).subscribe({
          next: () => {
            this.router.navigate(['estudantes']);
          },
        });
      } else {
        this.estudanteService.save(this.formGroupEst.value).subscribe({
          next: () => {
            this.router.navigate(['estudantes']);
          },
        });
      }
    }
  }


  get name(): any {
    return this.formGroupEst.get('name');
  }
  get email(): any {
    return this.formGroupEst.get('email');
  }

  get curso(): any {
    return this.formGroupEst.get('curso');
  }

  

}
