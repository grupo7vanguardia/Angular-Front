import { ExamenService } from './../../services/examen.service';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../services/curso.service';
import { Curso } from '../../models/curso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-cursos',
  templateUrl: './home-cursos.component.html',
  styleUrls: ['./home-cursos.component.css']
})
export class HomeCursosComponent implements OnInit {
  alumno: Object;
  cursos:Curso[];
  notaAlumno: any;
  ex: any;

  constructor(private cursoService:CursoService,private router:Router, private user: LoginService, private examenService: ExamenService) {
    
  }

  ngOnInit() {
    this.getCursos();
    this.alumno = this.user.readCookie();
  }

  getCursos(){
    this.cursoService.obtenerCursos().subscribe((data:any)=>{
      this.cursos=data.cursos;
    });
    
  }

  SetCurso(curso){
    localStorage.setItem('idCurso',curso);
  }

  //aqui es el cagadal
  /*probarNota(examen){
    
    this.examenService.obtenerExamenById(examen).subscribe(
      (data:any)=>{
      
      console.log(data);
    });
    console.log('1');
    return examen;
  }*/

}
