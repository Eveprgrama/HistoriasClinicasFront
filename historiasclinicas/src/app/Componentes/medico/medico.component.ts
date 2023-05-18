import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/model/medico';
import { MedicoService } from 'src/app/service/medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {
  medicos!: Medico;

  constructor(private sMedico: MedicoService, public router: Router){}
  ngOnInit(): void {
    const idMedico = 1;
    this.sMedico.buscarMedicoPorId(idMedico).subscribe(data =>{
      this.medicos = data
    })
  }

}
