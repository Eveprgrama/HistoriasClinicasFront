import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteDTO } from 'src/app/model/paciente-dto';
import { PacienteService } from 'src/app/service/paciente.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit{
  searchTerm: string = ''; // Variable para almacenar el término de búsqueda
  pacientesEncontrados!: PacienteDTO[];  
 mostrarError: boolean =  false;
 errorMensaje: string = "";

  constructor(private pacienteService: PacienteService, public router: Router, activatedroute: ActivatedRoute){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // En tu componente
  onSubmit() {
    // Realizar la búsqueda en el servidor utilizando el servicio de paciente
    // Dividir el valor de searchTerm en nombre y apellido
    const searchTermParts = this.searchTerm.split(" ");
    const nombre = this.searchTerm.split(' ')[0];
    const apellido = this.searchTerm.split(' ')[1];
    // Llamar a buscarPacientes con los valores de nombre y apellido
    this.buscarPacientes(nombre, apellido);
  }
  
  buscarPacientes(nombre: string, apellido: string) {
    // Obtener el valor del campo de búsqueda
    const valorBusqueda = this.searchTerm.trim();
  
    // Verificar si el valor de búsqueda es un DNI
    const esDni = /^\d{7,8}$/.test(valorBusqueda); // Aquí puedes usar una expresión regular para validar si el valor es un DNI válido
  
    if (esDni) {
      // Realizar búsqueda por DNI
      this.pacienteService.buscarPorDni(valorBusqueda)
        .subscribe(paciente => {
          if (paciente) {
            // Si se encuentra un paciente por DNI, asignar el paciente encontrado a la lista de pacientes encontrados
            this.pacientesEncontrados = [paciente];
          } else {
            // Si no se encuentra un paciente por DNI, mostrar un mensaje y permitir crear uno nuevo
            this.mostrarMensajeError('El paciente no existe, ¿desea crear uno nuevo?');
          }
        }, error => {
          // Manejar el error aquí
          this.mostrarMensajeError('El paciente no existe, ¿desea crear uno nuevo?');
        });
    } else {
      // Si no es un DNI, asumir que es un nombre y apellido combinado
      // Separar valorBusqueda en nombre y apellido según tus necesidades
      const [nombre, apellido] = valorBusqueda.split(' ');
  
      // Realizar búsqueda por nombre y apellido
      this.pacienteService.buscarPorNombreYApellido(nombre, apellido)
        .subscribe(pacientes => {
          if (pacientes.length > 0) {
            this.pacientesEncontrados = pacientes;
          } else {
            // Si no se encuentran pacientes por nombre y apellido, mostrar un mensaje
            this.mostrarMensajeError('No se encontraron pacientes por nombre y apellido, intente buscando por DNI o creando uno nuevo.');
          }
        }, error => {
          // Manejar el error aquí
          this.mostrarMensajeError('No se encontraron pacientes por nombre y apellido, intente buscando por DNI o creando uno nuevo.');
        });
    }
  }
  
  mostrarMensajeError(mensaje: string) {
    // Asignar el mensaje de error a la variable errorMensaje
    this.errorMensaje = mensaje;
    // Establecer la variable mostrarError en true para mostrar el mensaje de error
    this.mostrarError = true;
  }
  
  crearNuevoPaciente() {
    // Aquí puedes agregar la lógica para crear un nuevo paciente
    // Por ejemplo, redirigir a la página de creación de nuevo paciente o abrir un modal de creación de nuevo paciente
  }
  
  

  
}
