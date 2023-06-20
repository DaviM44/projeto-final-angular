import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorFormComponent } from './professor-form/professor-form.component';
import { ProfessoresComponent } from './professores/professores.component';

const routes: Routes = [
  {path: 'professores', component : ProfessoresComponent},
  {path: 'profdetails/:id', component : ProfessorFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
