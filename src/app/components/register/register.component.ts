import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nombre: String;
  apellido: String;
  usuario: String;
  password: String;
  correo: String;
  genero: String;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  Registrar(){
    const user = {
      nombre: this.nombre,
      apellido: this.apellido,
      usuario: this.usuario,
      password: this. password,
      correo: this.correo,
      genero: this.genero
    } 

    console.log(user);

    this.loginService.agregarUsuario(user).subscribe(data => {

      if ((data as any).success ){  
        alert('Usuario agregado.');
        this.router.navigate(['/login']);
      } else {
        alert('Error');
        this.router.navigate(['/register']);
      }

    });

  }
}
