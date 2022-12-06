import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { StatesService } from 'src/app/services/states.service';

@Component({
  selector: 'app-add-state',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.css']
})
export class AddStateComponent implements OnInit {

  title="Add State here !!!"
  sid=0
  state:any
  msg:any
  body={
    id:0,
    stateName:''
  }
  constructor(private _router:ActivatedRoute,private router:Router,private service:StatesService,private _snackBar: MatSnackBar) {
    
   }

  formSubmit(){
    if(this.body.stateName.trim()=='')
    return
    if(this.body.id!=0 && this.sid!=0){
    return  this.service.updateExistState(this.body,this.sid).subscribe(
        (data)=>{
            this._snackBar.open("Update Successfully", "OK", { duration: 2000, verticalPosition: "bottom" });
            this.router.navigate(['admin-dashboard/all-state']);
            console.log(this.sid)
            console.log(this.body)
          },
        (error)=>{
                 this._snackBar.open("Error while connecting to server, please try again", "OK", { duration: 2000, verticalPosition: "bottom" });
        }
      )
    }else{
     return this.service.createNewState(this.body).subscribe(
        (data)=>{
            this._snackBar.open("Save Successfully", "OK", { duration: 2000, verticalPosition: "bottom" });
            this.router.navigate(['admin-dashboard/all-state']);
          },
        (error)=>{
                 this._snackBar.open("Error while connecting to server, please try again", "OK", { duration: 2000, verticalPosition: "bottom" });
        }
      )
    }
  }
  ngOnInit(): void {
    this.sid=this._router.snapshot.params['id'];
    this.service.getStateById(this.sid).subscribe(
      (data)=>{
        this.state=data,
        this.body.id=this.state.id,
        this.body.stateName=this.state.stateName
      },
      (error)=>{
       this.msg="server loading problem"
      }
    )
  }
}