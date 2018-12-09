import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  constructor(private loginServ: LoginService) { }

  ngOnInit() {
    
  }

  logout(){
    var x = this.loginServ.readCookie();

    document.cookie = "alumno=" + JSON.stringify(x) +"; expires=Thu, 15 Dec 2010 12:00:00 UTC; path=/";
  }

}
