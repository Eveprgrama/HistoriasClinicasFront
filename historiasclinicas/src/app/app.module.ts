import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { MedicoComponent } from './Componentes/medico/medico.component';
import { BusquedaComponent } from './Componentes/busqueda/busqueda.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistromedicoComponent } from './Componentes/registromedico/registromedico.component';
import { CrearPacienteComponent } from './Componentes/modal/crear-paciente/crear-paciente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PacienteService } from './service/paciente.service';
import { ActualizacionComponent } from './Componentes/actualizacion/actualizacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MedicoComponent,
    BusquedaComponent,
    RegistromedicoComponent,
    CrearPacienteComponent,
    ActualizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PacienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
