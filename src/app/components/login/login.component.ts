import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { first } from 'rxjs/operators';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: String;
  password: String;

  constructor(private loginService: LoginService, 
              private router: Router, 
              private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  Login(){

    const user = {
      usuario: this.usuario,
      password: this.password
    }

    this.loginService.login(user)  
    .pipe(first())
    .subscribe(
        (data: any) => {
            if (data.logged){
              this._flashMessagesService.show(data.mensaje, { cssClass: 'alert-success', timeout: 5000 },  );
              this.router.navigate(['/welcome']);
              document.cookie = "alumno=" + JSON.stringify(data.alumno) +"; expires=Thu, 15 Dec 2018 12:00:00 UTC; path=/";
            }else{
              this._flashMessagesService.show(data.mensaje, { cssClass: 'alert-danger', timeout: 5000 },  );
              this.router.navigate(['/login']);
            }
        },
        error => {
          this._flashMessagesService.show(error, { cssClass: 'alert-danger', timeout: 5000 } );
            this.router.navigate(['/register']);
        });
    
  }

}
