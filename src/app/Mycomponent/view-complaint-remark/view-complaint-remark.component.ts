import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ComplaintRemarkService } from 'src/app/services/complaint-remark.service';
import { ComplaintStatusService } from 'src/app/services/complaint-status.service';
import { ComplaintService } from 'src/app/services/complaint.service';

@Component({
  selector: 'app-view-complaint-remark',
  templateUrl: './view-complaint-remark.component.html',
  styleUrls: ['./view-complaint-remark.component.css']
})
export class ViewComplaintRemarkComponent implements OnInit {
  cid=0
  table:any
  status:any
  statusId={
    pnid:0,
    pcid:0,
    cnid:0,
    coid:0
  }
  constructor(
    private _router:ActivatedRoute,
    private complaintSevice:ComplaintService,
    private csservice:ComplaintStatusService,
    private remarkService:ComplaintRemarkService,
    private snack:MatSnackBar
  ) { }

  ngOnInit(): void {
  this.csservice.getAllStatus().subscribe(
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
        })
    },
   (error)=> {})
   
   this.cid=this._router.snapshot.params['cid']
   this.complaintSevice.getComplaintByCid(this.cid).subscribe((data)=>{
    this.table=data
  },(error)=>{})
  }
  delete(id:number){
  this.remarkService.deletecomplaintRemark(id).subscribe(
    (data)=>{
      this.snack.open("delete Successfully !!!")
      window.location.reload()
    },
    (error)=>{

    }
  )    
  }
}
