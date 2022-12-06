import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { StatesService } from 'src/app/services/states.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {

  states:any
  body={
    id:0,
    firstname:'',
    lastname:'',
    dob:'',
    country:'',
    contactNo:'',
    address:'',
    gender:'',
    state:'',
    pinCode:'',
  }
  constructor(private state:StatesService,private userservice:UserService,private login:LoginService,private snack:MatSnackBar) { }
  
  ngOnInit(): void {
    this.state.getAllStates().subscribe((data)=>{this.states=data},(error)=>{})
    this.userservice.getCurrentLoginUserDetail(this.login.getUser().username).subscribe((data:any)=>{
      this.body=data
      this.body.country='India'
    },(error)=>{})
  }
  formSubmit(){
    this.userservice.updateExistUser(this.body,this.body.id).subscribe((data)=>{
   this.snack.open("update Successfully !!!","ok",{duration:2000,verticalPosition:"bottom"})
   window.location.reload()
  },(error)=>{  })
  }
}
