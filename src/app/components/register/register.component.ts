import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { first } from 'rxjs/operators';
import { FlashMessagesService } from 'angular2-flash-messages';

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

  constructor(private loginService: LoginService, private router: Router, private _flashMessagesService: FlashMessagesService) { }

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

    this.loginService.agregarUsuario(user)  
    .pipe(first())
    .subscribe(
        data => {
            this._flashMessagesService.show('El usuario ha sido registrado.', { cssClass: 'alert-success', timeout: 5000 },  );
            this.router.navigate(['/login']);
        },
        error => {
          this._flashMessagesService.show('Error durante el registro.', { cssClass: 'alert-danger', timeout: 5000 } );
            this.router.navigate(['/register']);
        });

  }
}
