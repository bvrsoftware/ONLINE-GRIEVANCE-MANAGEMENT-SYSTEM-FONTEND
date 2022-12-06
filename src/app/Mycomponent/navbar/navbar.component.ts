import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   islogin=false
  constructor(private login:LoginService) { }
  showFiller = true;
  ngOnInit(): void {
    this.islogin=this.login.isLoggedIn();
  }
  logout(){
    this.login.logOut();
    window.location.href="../../login"
  }

}
