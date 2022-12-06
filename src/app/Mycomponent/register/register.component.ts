import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error={
    firstname:'',
    dob:'',
    email:'',
    password:'',
    pass2:''
  }
  user={
    firstname:'',
    lastname:'',
    dob:'',
    email:'',
    password:''
  }
  pass1=''
  pass2=''
  constructor(private userService:UserService,private snack:MatSnackBar,private router:Router) {   }
  formSubmit(){
    if(this.user.email.trim()==''){
      return
    }
    if(this.user.password.trim()==''){
      return
    }
    if(this.pass1==this.pass2){
      this.user.password=this.pass1
    }else{
      this.error.pass2="password mis match"
      return
    }
    
    // Add user
    this.userService.newUser(this.user).subscribe(
      (data)=>{
        //success
         this.snack.open("Register Successfully !!!","ok",{duration:2000,verticalPosition:"bottom"})
         this.router.navigate(['login'])
      },
      (error:any)=>{
        // error
        this.error=error.error;
      }
    )
  }
  ngOnInit(): void {
  }

}
