import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { MedicoComponent } from './Componentes/medico/medico.component';
import { BusquedaComponent } from './Componentes/busqueda/busqueda.component';
import { RegistromedicoComponent } from './Componentes/registromedico/registromedico.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: "busqueda", component: BusquedaComponent},
  { path: "historiaclinica/:id", component: RegistromedicoComponent},
  { path: 'medico', component: MedicoComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/login', pathMatch: 'full' } // Ruta para manejar rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
