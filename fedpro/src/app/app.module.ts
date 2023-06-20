import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfessoresComponent } from './professores/professores.component';
import { ProfessorFormComponent } from './professor-form/professor-form.component';
import { EstudantesComponent } from './estudantes/estudantes.component';
import { EstudantesFormComponent } from './estudantes-form/estudantes-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessoresComponent,
    ProfessorFormComponent,
    EstudantesComponent,
    EstudantesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
     HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
