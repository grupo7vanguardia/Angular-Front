import { Component, OnInit } from '@angular/core';
import { ExamenService } from 'src/app/services/examen.service';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {
  idExamen:any;
  preguntas:any[];

  constructor(private examenService:ExamenService) { }

  ngOnInit() {
    this.idExamen=localStorage.getItem('idExamen');
    this.ObtenerExamen(this.idExamen);
  }

  ObtenerExamen(idExamen){
    this.examenService.obtenerExamenById(idExamen).subscribe((data:any)=>{
      this.preguntas=data.examen.preguntas;
    })
  }


}
