import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../services/curso.service';
import { Curso } from '../../models/curso';


@Component({
  selector: 'app-home-cursos',
  templateUrl: './home-cursos.component.html',
  styleUrls: ['./home-cursos.component.css']
})
export class HomeCursosComponent implements OnInit {
  cursos:Curso[];
  constructor(private cursoService:CursoService) { }

  ngOnInit() {
    this.getCursos();
  }

  getCursos(){
    this.cursoService.obtenerCursos().subscribe((data:any)=>{
      console.log(data);
      this.cursos=data.cursos;
    })
  }
}
