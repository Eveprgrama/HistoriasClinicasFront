import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { HistoriaClinica } from 'src/app/model/historia-clinica'; 
import { HistoriaClinicaService } from 'src/app/service/historia-clinica.service'; 
import { PacienteService } from 'src/app/service/paciente.service'; 
import { switchMap } from 'rxjs/operators';
import { PacienteDTO } from 'src/app/model/paciente-dto';


@Component({
  selector: 'app-registromedico',
  templateUrl: './registromedico.component.html',
  styleUrls: ['./registromedico.component.css'],
  providers: [DatePipe]
})

export class RegistromedicoComponent implements OnInit {
  fechaCreacion: string = '';
  @ViewChild('fechaCreacionInput') fechaCreacionInput: any;
  @ViewChild('fechaActualCheckbox') fechaActualCheckbox: any;
  formulario: FormGroup;
  submitted = false;
  errorMessage = '';
  Paciente: PacienteDTO;
  pacienteId:number;
  historiaClinica: HistoriaClinica = {
    pacienteId: 0,
    archivos: [],
    fechaCreacion: '',
    enfermedad: '',
    descripcion: '',
    medicacion: '',
    droga: '',
    dosis: '',
    peso: 0,
    altura: 0, //el 0 se agrega a los valores númericos ya que '' indica string
    indicaciones: '',
    actualizaciones: []
  };

  

  constructor(private datePipe: DatePipe, private fb: FormBuilder,
    private historiaClinicaService: HistoriaClinicaService,
    private router: Router, public pacienteService: PacienteService, public route: ActivatedRoute) {
      this.formulario = this.fb.group({
        fechaCreacion: ['', Validators.required],
        enfermedad: [''],
        descripcion: [''],
        medicacion: [''],
        droga: [''],
        dosis: [''],
        peso: [0],
        altura: [0],
        indicaciones: ['', Validators.required],
        actualizaciones: this.fb.array([])
      });
     }

     
  ngOnInit() {
    const pacienteId = +this.route.snapshot.paramMap.get('id'); 
    this.historiaClinicaService.buscarPorId(pacienteId).subscribe(
      (paciente: PacienteDTO) => {
        // Existe una historia clínica asociada
        if (paciente.historiasClinicas.length > 0) {
          this.router.navigate(['/actualizaciones', pacienteId]);
        } else {
          // No existe una historia clínica asociada
          // Permanecer en la página actual
          console.log('No existe una historia clínica asociada');
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
 

  //método para establecer fecha actual en historia clinica 
  setFechaActual(fechaCreacionInput: HTMLInputElement, fechaActualCheckbox: HTMLInputElement) {
    if (fechaActualCheckbox.checked) {
      const fechaActual = new Date().toISOString().substring(0, 10);
      fechaCreacionInput.value = fechaActual;
    } else {
      fechaCreacionInput.value = '';
    }
  }
  

//Post Nueva historia clínica
crearHistoriaClinica(): void {
  // Asigna los valores del formulario a this.historiaClinica
  this.historiaClinica = this.formulario.value;

  // Ahora que this.historiaClinica tiene los valores correctos, verifica si es null
  if (!this.historiaClinica) {
    // Aquí puedes manejar el caso en el que 'this.historiaClinica' sea null.
    console.error('historiaClinica es null');
    return;
  }

  const pacienteId = +this.route.snapshot.params['id'];
  const nuevaHistoriaClinica: HistoriaClinica = { 
    pacienteId: pacienteId, 
    archivos: [], 
    fechaCreacion: this.historiaClinica.fechaCreacion,
    enfermedad: this.historiaClinica.enfermedad, 
    descripcion: this.historiaClinica.descripcion, 
    medicacion: this.historiaClinica.medicacion, 
    droga: this.historiaClinica.droga, 
    dosis: this.historiaClinica.dosis, 
    peso: this.historiaClinica.peso, 
    altura: this.historiaClinica.altura, 
    indicaciones: this.historiaClinica.indicaciones, 
    actualizaciones: this.historiaClinica.actualizaciones || [] 
  };

  console.log(nuevaHistoriaClinica)
  this.historiaClinicaService.createHistoriaClinica(nuevaHistoriaClinica, pacienteId)
  .subscribe(data=>{
    window.location.reload();
  })
}

//verificacion de que el formulario esté correctamente aplicado
onEnviar(event: Event){
  event.preventDefault(); 
  if (this.formulario.valid){
    alert("Todo salio bien ¡Enviar formulario!")
    this.crearHistoriaClinica();
  } else {    
    this.formulario.markAllAsTouched(); 
    console.error('El formulario es inválido');
  }
}
//metodo para imprimir indicaciones
imprimirIndicaciones(): void {
  let printContents = document.getElementById('indicaciones').innerText;
  let originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}

}
