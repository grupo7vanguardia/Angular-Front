import { Component, OnInit,Directive } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/app/models/curso';
import {DomSanitizer} from '@angular/platform-browser'

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


  constructor(private sanitizer:DomSanitizer,private cursoService:CursoService) { 
   
  }

  ngOnInit() {
  this.idCurso=localStorage.getItem('idCurso');
  this.ObtenerCurso(this.idCurso);
  
  }

  ObtenerCurso(idCurso){
    this.cursoService.obtenerCursoById(idCurso).subscribe((data:any)=>{
      this.titulo=data.curso.titulo;
      this.nivel=data.curso.nivel;
      this.url='https://www.youtube.com/embed/_mglu_eps2A';
      console.log(this.url);

      this.SetExamen(data.curso.examen)
    })
  }

  ObtenerURL(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  SetExamen(idExamen){
    localStorage.setItem('idExamen',idExamen);
  }

}
