import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  body={
    id:0,
    firstname:'',
    email:'',
    password:''
  }
  error={
    password:'',
    pass2:''
  }
  pass1=''
  pass2=''
  constructor(private userservice:UserService,private login:LoginService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  formSubmit(){
    if(this.pass1==this.pass2){
      this.body.password=this.pass1
    }else{
      this.error.pass2="password mis match"
      return
    }
   this.userservice.getCurrentLoginUserDetail(this.login.getUser().username).subscribe(
    (data:any)=>{
      this.body.id=data.id
      this.body.firstname=data.firstname
      this.body.email=data.email
      this.userservice.changeUserPassword(this.body,data.id).subscribe(
        (data)=>{
          this.snack.open("password changed Successfully !!!","ok",{duration:2000,verticalPosition:"bottom"})
          this.login.logOut()
          window.location.href="../login"
        },
        (error:any)=>{
          console.log(error)
          this.error=error.error}
      )
    },(error)=>{

    }
   )
  }
}
