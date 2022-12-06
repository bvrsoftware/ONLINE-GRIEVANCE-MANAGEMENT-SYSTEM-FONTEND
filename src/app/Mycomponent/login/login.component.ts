import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login:LoginService,private snack:MatSnackBar,private router:Router) { }
  public user={
    username:'',
    password:''
  }
  ngOnInit(): void {
  }
  formSubmit(){
    if(this.user.username.trim()=='')
    return
    if(this.user.password.trim()=='')
    return
   return this.login.generateToken(this.user).subscribe(
    (data:any)=>{
      //success
      this.login.loginUser(data.token);
      this.login.currentLoginUser().subscribe(
        (data)=>{
          this.login.setUser(data)
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
              this.snack.open("Welcome on Admin Dashboard","ok",{duration:2000,verticalPosition:"bottom"})
              window.location.href="admin-dashboard/"
            }
          }); 
        },
        (error)=>{
        }
       )
    },
    (error:any)=>{
    // error
    this.snack.open(error.error.message,"ok",{duration:2000,verticalPosition:"bottom"})
    window.location.reload();
    }
    )
  }
}
