import { Component, OnInit } from '@angular/core';
import { ComplaintStatusService } from 'src/app/services/complaint-status.service';
import { ComplaintService } from 'src/app/services/complaint.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-complaint-by-closed',
  templateUrl: './user-complaint-by-closed.component.html',
  styleUrls: ['./user-complaint-by-closed.component.css']
})
export class UserComplaintByClosedComponent implements OnInit {
  tableTitle='All Closed Complaint'
  table:any
  status:any
  msg=''
  sid=0
  constructor(private cservice:ComplaintService,private userservice:UserService,private login:LoginService,
    private sservice:ComplaintStatusService) { }

  ngOnInit(): void {
    this.sservice.getAllStatus().subscribe(
      (data)=>{
        this.status=data
        this.status.forEach((e:any) => {
          if(e.statusName=='closed'){
          this.sid=e.id
          }});
      },
     (error)=> {
       this.msg='status api server problem  !!!'
      }
    )
    this.userservice.getCurrentLoginUserDetail(this.login.getUser().username).subscribe(
      (data:any)=>{
        this.table=data.complaint
        },
      (error)=>{
        this.msg='user api server problem  !!!'
      }
    )
  }

}