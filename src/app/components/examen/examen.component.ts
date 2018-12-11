import { LoginService } from 'src/app/services/login.service';
import { Component, OnInit } from '@angular/core';
import { ExamenService } from 'src/app/services/examen.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from '@angular/router';
@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {
  idExamen:any;
  preguntas:any[];
  nota:number;
  cookie: any;
  examenw: any;

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

  constructor(private examenService:ExamenService, private loginServ: LoginService, private router: Router, 
    private _flashMessagesService: FlashMessagesService, ) { 
    this.cookie = loginServ.readCookie();
  }

  ngOnInit() {
    this.idExamen=localStorage.getItem('idExamen');
    this.ObtenerExamen(this.idExamen);
  }

  ObtenerExamen(idExamen){
    this.examenService.obtenerExamenById(idExamen).subscribe((data:any)=>{
      this.examenw = data.examen;
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

    console.log(this.cookie._id);

    const calificacion={
      examen:this.idExamen,
      alumno: this.cookie._id,
      nota:this.nota
    }

    console.log(calificacion);
    this.EnviarExamen(calificacion);
  }


  NotaExamen(correctas){
    return (correctas/3)*100;
  }

  EnviarExamen(calificacion){
      if (calificacion.nota > 66){

        var alumno = {
          "_id" : this.cookie._id
        }

        if (this.cookie.nivel == this.examenw.nivel)
        {
          this.loginServ.subirNivel(alumno).subscribe((data:any)=>{
            this._flashMessagesService.show(data.mensaje, { cssClass: 'alert-success', timeout: 5000 },  );
            this.router.navigate(['']);
          }
          );
          document.cookie = "alumno=" + JSON.stringify(this.cookie) +"; expires=Thu, 15 Dec 2010 12:00:00 UTC; path=/";
        }else{
          this._flashMessagesService.show("Felicidades, el examen ya habia sido realizado y saco una buena nota.", { cssClass: 'alert-success', timeout: 5000 },  );
          this.router.navigate(['']);
        }
        

        
      }else{
        this._flashMessagesService.show("Ha completado el examen con una mala nota.", { cssClass: 'alert-danger', timeout: 5000 },  );
        this.router.navigate(['']);
        
      }

    this.examenService.agregarNota(calificacion).subscribe((data: any)=>{
      
    });

    
  }

  
}
