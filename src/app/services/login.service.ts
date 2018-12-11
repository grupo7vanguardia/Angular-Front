import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  server: String;

  constructor(private http: HttpClient) {
    //this.server = "http://206.189.75.36";
    this.server = "http://localhost"
   }

  agregarUsuario(user) {

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.server + '/api/alumnos', user, { headers });
    
  }

  login(user){

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.server + '/api/login', user, { headers });

  }

  isLoggedIn(){
    
    if (document.cookie){
      return true;
    }else{
      return false;
    }

  }

  readCookie(){
      var result = document.cookie.match(new RegExp('alumno=([^;]+)'));
      result && (result = JSON.parse(result[1]));
      return result;
  }

  subirNivel(alumno){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.put(this.server + '/api/alumnos/subirnivel', alumno, { headers });
  }

}
