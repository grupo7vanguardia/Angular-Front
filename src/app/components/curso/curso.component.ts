import { Component, OnInit,Directive } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/app/models/curso';
import {DomSanitizer} from '@angular/platform-browser'
import { ExamenService } from 'src/app/services/examen.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  
  idCurso:any;
  titulo:string;
  nivel:string;
  url:any;
  examenNota: any;
  cookie: any;


  constructor(private sanitizer:DomSanitizer,private cursoService:CursoService, private examenService: ExamenService, private log: LoginService) { 
   
  }

  ngOnInit() {
  this.idCurso=localStorage.getItem('idCurso');
  this.ObtenerCurso(this.idCurso);
  this.cookie = this.log.readCookie();
  }

  ObtenerCurso(idCurso){
    this.cursoService.obtenerCursoById(idCurso).subscribe((data:any)=>{
      this.titulo=data.curso.titulo;
      this.nivel=data.curso.nivel;
      this.url=data.curso.urlVideo;
      console.log(this.url);

      this.SetExamen(data.curso.examen)
      this.obtenerCalificacion(data.curso.examen);
    })
  }

  obtenerCalificacion(examen){
    
    this.examenService.obtenerExamenById(examen).subscribe((data:any)=>{
      console.log(data);
      console.log(this.cookie);

      var results = [];
      var searchField = this.cookie._id;
      for (var i=0 ; i < data.examen.calificacion.length ; i++)
      {
        if (data.examen.calificacion[i].alumno = searchField){
          results.push(parseInt(data.examen.calificacion[i].nota));
        }
      }
      this.examenNota = Math.max(...results);
    });

    
  }

  ObtenerURL(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  SetExamen(idExamen){
    localStorage.setItem('idExamen',idExamen);
  }

}
