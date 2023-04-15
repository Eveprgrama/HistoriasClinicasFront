import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { MedicoComponent } from './Componentes/medico/medico.component';
import { HistoriaClinicaComponent } from './Componentes/historia-clinica/historia-clinica.component';
import { BusquedaComponent } from './Componentes/busqueda/busqueda.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: "historiaclinica", 
    component: BusquedaComponent,
    children: [
        { path: "historia", component: HistoriaClinicaComponent }
    ]
},
  { path: 'medico', component: MedicoComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/login', pathMatch: 'full' } // Ruta para manejar rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
