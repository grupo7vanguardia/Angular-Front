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
  constructor(private cursoService:CursoService,private router:Router, private user: LoginService) {
    this.alumno = user.readCookie();
  }

  ngOnInit() {
    this.getCursos();
  }

  getCursos(){
    this.cursoService.obtenerCursos().subscribe((data:any)=>{
      this.cursos=data.cursos;
    })
  }

  SetCurso(curso){
    localStorage.setItem('idCurso',curso);
  }

}
