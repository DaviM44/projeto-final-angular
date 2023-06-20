import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorFormComponent } from './professor-form/professor-form.component';
import { ProfessoresComponent } from './professores/professores.component';
import { EstudantesComponent } from './estudantes/estudantes.component';
import { EstudantesFormComponent } from './estudantes-form/estudantes-form.component';

const routes: Routes = [
  {path: 'professores', component : ProfessoresComponent},
  {path: 'profdetails/:id', component : ProfessorFormComponent},
  {path: 'estudantes', component : EstudantesComponent},
  {path: 'estudantedetails/:id', component : EstudantesFormComponent},
  {path: 'estudantereg', component : EstudantesFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
