import {Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ComplaintStatusService } from 'src/app/services/complaint-status.service';
import { ComplaintService } from 'src/app/services/complaint.service';
import { StatesService } from 'src/app/services/states.service';

@Component({
  selector: 'app-all-complaints',
  templateUrl: './all-complaints.component.html',
  styleUrls: ['./all-complaints.component.css']
})
export class AllComplaintsComponent implements OnInit {
  tableTitle='All Complaints By Selection'
  selectvalue=''
  searchvalue:any
  orginalvalue:any
  table:any;
  statusId={
    pnid:0,
    pcid:0,
    cnid:0,
    coid:0
  }
  constructor(
    private complaintService:ComplaintService,
    private stateService:StatesService,
    private status:ComplaintStatusService,
    private category:CategoryService
    ) {
    
    this.complaintService.allComplaint().subscribe(
      (data:any)=>{
       this.table=data.content  
      },
      (error)=>{
    
      }
    )
   }
   ngOnInit(): void {
    this.status.getAllStatus().subscribe(
      (data:any)=>{
          data.forEach((e:any) => {
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
  }
  selectionChangeFun(){
   if(this.selectvalue=='Category'){
    this.category.getAllCategory().subscribe((data:any)=>{this.orginalvalue=data},(error)=>{})
   }else if(this.selectvalue=='Status'){
     this.status.getAllStatus().subscribe((data:any)=>{this.orginalvalue=data},(error)=>{})
   }else if(this.selectvalue=='State'){
    this.stateService.getAllStates().subscribe((data:any)=>{this.orginalvalue=data},(error)=>{})
   }
  }
  formSubmit(){
    if(this.selectvalue=='Category'){
       this.complaintService.getComplaintByCategoryId(this.searchvalue).subscribe((data:any)=>{this.table=data},(error)=>{})
     }else if(this.selectvalue=='Status'){
      this.complaintService.getComplaintByStatusId(this.searchvalue).subscribe((data:any)=>{this.table=data},(error)=>{})
    }else if(this.selectvalue=='State'){
      this.complaintService.getComplaintByStateId(this.searchvalue).subscribe((data:any)=>{this.table=data},(error)=>{})
    }
  }
}
