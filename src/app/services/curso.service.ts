import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CursoService {
  server: String;
  constructor(private http: HttpClient) {
    this.server = "http://206.189.75.36";
   }

   obtenerCursos() {
    return this.http.get(this.server + '/api/cursos');
  }

    obtenerCursoById(idCurso){
      return this.http.get(this.server + '/api/cursos/'+idCurso);
    }
}
