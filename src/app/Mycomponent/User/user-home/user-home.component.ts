import { Component, OnInit } from '@angular/core';
import { ComplaintStatusService } from 'src/app/services/complaint-status.service';
import { ComplaintService } from 'src/app/services/complaint.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  status:any
  msg=''
  statusId={
    pnid:0,
    pcid:0,
    cnid:0,
    coid:0
  }
  countComplaintByStatus={
    pnid:0,
    pcid:0,
    cnid:0,
    coid:0
  }
  table:any
  constructor(private cservice:ComplaintService,private userservice:UserService,private login:LoginService,
    private sservice:ComplaintStatusService) { }

  ngOnInit(): void {
    this.sservice.getAllStatus().subscribe(
      (data)=>{
        this.status=data
        this.status.forEach((e:any) => {
          if(e.statusName=='panding'){
          this.statusId.pnid=e.id
          }else if(e.statusName=='process'){
            this.statusId.pcid=e.id
          }else if(e.statusName=='cancel'){
            this.statusId.cnid=e.id
          }else if(e.statusName=='closed'){
            this.statusId.coid=e.id
          }
        });
      },
     (error)=> {
       this.msg='status api server problem  !!!'
      }
    )
    this.userservice.getCurrentLoginUserDetail(this.login.getUser().username).subscribe(
      (data:any)=>{
        this.table=data.complaint
        data.complaint.forEach((e:any) => {
          if(e.statusId==this.statusId.pnid){
              this.countComplaintByStatus.pnid++
            }else if(e.statusId==this.statusId.pcid){
              this.countComplaintByStatus.pcid++
            }else if(e.statusId==this.statusId.cnid){
              this.countComplaintByStatus.cnid++
            }else if(e.statusId==this.statusId.coid){
              this.countComplaintByStatus.coid++
            }
        });
        },
      (error)=>{
        this.msg='user api server problem  !!!'
      }
    )
  }

}
