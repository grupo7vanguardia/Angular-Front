import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  server: String;
  constructor(private http: HttpClient) {
    this.server = "http://206.189.75.36";
   }


    obtenerExamenById(idExamen){
      return this.http.get(this.server + '/api/examenes/'+idExamen);
    }
}
