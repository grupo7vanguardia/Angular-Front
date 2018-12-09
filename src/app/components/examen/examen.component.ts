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
  nota:number;

  examenCorrecto={
    respuesta0:null,
    respuesta1:null,
    respuesta2:null
  }

  examen={
    respuesta0:null,
    respuesta1:null,
    respuesta2:null
  }

  constructor(private examenService:ExamenService) { }

  ngOnInit() {
    this.idExamen=localStorage.getItem('idExamen');
    this.ObtenerExamen(this.idExamen);
  }

  ObtenerExamen(idExamen){
    this.examenService.obtenerExamenById(idExamen).subscribe((data:any)=>{
      this.preguntas=data.examen.preguntas;
      this.examenCorrecto.respuesta0=data.examen.preguntas[0].correcta;
      this.examenCorrecto.respuesta1=data.examen.preguntas[1].correcta;
      this.examenCorrecto.respuesta2=data.examen.preguntas[2].correcta;
    })
  }

  FinalizarExamen(){
    console.log(this.examen);
    console.log(this.examenCorrecto);   

    let ejercicio=0;

    if(this.examenCorrecto.respuesta0==this.examen.respuesta0){
      console.log("Correcto");
      ejercicio++;
    }
    else{
      console.log("Incorrecto");
    }
    
    if(this.examenCorrecto.respuesta1==this.examen.respuesta1){
      console.log("Correcto");
      ejercicio++;
    }
    else{
      console.log("Incorrecto");
    }

    if(this.examenCorrecto.respuesta2==this.examen.respuesta2){
      console.log("Correcto");
      ejercicio++;
    }
    else{
      console.log("Incorrecto");
    }
    this.nota=this.NotaExamen(ejercicio);

    const calificacion={
      examen:this.idExamen,
      alumno:localStorage.getItem('idAlumno'),
      nota:this.nota
    }

    console.log(calificacion);
    this.EnviarExamen(calificacion);
  }


  NotaExamen(correctas){
    return (correctas/3)*100;
  }

  EnviarExamen(calificacion){
    this.examenService.agregarNota(calificacion).subscribe((data)=>{
      console.log(data);
    })
  }
}
