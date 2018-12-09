import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private login: LoginService) {



   }

  ngOnInit() {
  }

  probar(){
    console.log(this.login.isLoggedIn());
    
  }

}
