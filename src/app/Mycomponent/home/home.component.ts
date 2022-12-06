import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private login:LoginService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.login.getUserRole().forEach((e:any) => {
      // you can redirect admin dashboard
      if(e.authority=='ADMIN_USER'){
        this.snack.open("Welcome on Admin Dashboard","ok",{duration:2000,verticalPosition:"bottom"})
        window.location.href="admin-dashboard/"
       // this.router.navigate(['admin-dashboard/'])
      }
      //you can redirect admin dashboard 
      else if(e.authority=='NORMAL_USER'){
        this.snack.open("Welcome on User Dashboard","ok",{duration:2000,verticalPosition:"bottom"})
        window.location.href="user-dashboard/"
       // this.router.navigate(['user-dashboard/'])
      }else{
        window.location.reload
      }
  })

  }
}