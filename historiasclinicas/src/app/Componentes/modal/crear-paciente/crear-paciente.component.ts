import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { PacienteDTO } from 'src/app/model/paciente-dto';
import { PacienteService } from 'src/app/service/paciente.service';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit {

  form!:FormGroup;
  paciente: PacienteDTO = {
    nombre: '',
    apellido: '',
    dni: '',
    fechaNacimiento: '',
    direccion: '',
    telefono: '',
    email: '',
    historiasClinicas: []
  }
  submitted = false;
  showModal: boolean = false;

  constructor(public router: Router, private sPaciente: PacienteService, private fb: FormBuilder){}

  ngOnInit(): void {
      // Crea el FormGroup con los campos del formulario y sus validaciones
      this.form = this.fb.group({
        nombre: [this.paciente.nombre, Validators.required],
        apellido: [this.paciente.apellido, Validators.required],
        dni: [this.paciente.dni, Validators.required],
        fechaNacimiento: [this.paciente.fechaNacimiento, Validators.required],
        direccion: [this.paciente.direccion, Validators.required],
        telefono: [this.paciente.telefono, Validators.required],
        email: [this.paciente.email, [Validators.required, Validators.email]],
        // Puedes añadir más campos y validaciones aquí
      });
    }

    public onCreate(): void {
      const data = {
        nombre: this.form.value.nombre,
        apellido: this.form.value.apellido,
        dni: this.form.value.dni,
        fechaNacimiento: this.form.value.fechaNacimiento,
        direccion: this.form.value.direccion,
        telefono: this.form.value.telefono,
        email: this.form.value.email,
        historiasClinicas: []
      };
    
      this.sPaciente.guardarPaciente(data).subscribe({
        next: (nuevoPaciente) => {
          console.log(nuevoPaciente);
          this.submitted = true;
          // Obtener el nuevo ID del paciente creado
          const nuevoId = nuevoPaciente.id;
    
          // Redirigir a la ruta de la historia clínica del nuevo paciente
          this.router.navigate(['/historiaclinica', nuevoId]);
        }
      });
    }
  // Implementación del método para cerrar el modal
  closeModal() {
    this.showModal = false;
  }

   // Método para abrir el modal
   abrirModal() {
    this.showModal = true; // Establece la variable mostrarModal en true
  }
}
