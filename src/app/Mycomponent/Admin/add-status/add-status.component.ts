import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintStatusService } from 'src/app/services/complaint-status.service';

@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.component.html',
  styleUrls: ['./add-status.component.css']
})
export class AddStatusComponent implements OnInit {
  title="Details here !!!"
  sid=0
  table:any
  msg=''
  body={
    id:0,
    statusName:''
  }
  constructor(private service:ComplaintStatusService,private _router:ActivatedRoute,private router:Router,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.sid=this._router.snapshot.params['id']
    this.service.getStatusById(this.sid).subscribe(
      (data)=>{
       this.table=data
       this.body.id=this.table.id
       this.body.statusName=this.table.statusName
      },
      (error)=>{
        this.msg='server connection error'
      }
    )
  }
  formSubmit(){
    if(this.body.statusName.trim()==''){return}
  if(this.body.id==0 && this.sid!=0){
    return this.service.addNewStatus(this.body).subscribe(
      (data)=>{
        this.snack.open("Saved Successfully !!!","ok",{duration:2000,verticalPosition:"bottom"})
        this.router.navigate(["/admin-dashboard/all-status"])
      },
      (error)=>{
        this.msg="server connection problem"
      }
    )
  }else{
    return this.service.updateExistStatus(this.body,this.sid).subscribe(
      (data)=>{
        this.snack.open("Updated Successfully !!!","ok",{duration:2000,verticalPosition:"bottom"})
        this.router.navigate(["/admin-dashboard/all-status"])
      },
      (error)=>{
        this.msg="server connection problem"
      }
    )
   }
  }
}
