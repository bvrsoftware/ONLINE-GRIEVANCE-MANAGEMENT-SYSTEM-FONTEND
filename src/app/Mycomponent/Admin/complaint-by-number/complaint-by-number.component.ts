import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ComplaintStatusService } from 'src/app/services/complaint-status.service';
import { ComplaintService } from 'src/app/services/complaint.service';
import { StatesService } from 'src/app/services/states.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-complaint-by-number',
  templateUrl: './complaint-by-number.component.html',
  styleUrls: ['./complaint-by-number.component.css']
})
export class ComplaintByNumberComponent implements OnInit {

  tableTitle='All Complaints Search'
  selectvalue=''
  searchvalue:any
  orginalvalue:any
  table:any;
  searchId=0
  statusId={
    pnid:0,
    pcid:0,
    cnid:0,
    coid:0
  }
  constructor(
    private complaintService:ComplaintService,
    private subCservice:SubCategoryService,
    private userService:UserService,
    private status:ComplaintStatusService
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
  formSubmit(){
    if(this.selectvalue=='User'){
      this.userService.getCurrentLoginUserDetail(this.searchvalue).subscribe(
        (data:any)=>{
          this.complaintService.getComplaintByUserId(data.id).subscribe((data)=>{this.table=data},(error)=>{})
        },(error)=>{
          
        })
      }else if(this.selectvalue=='SubCategory'){
        this.subCservice.getAllSubCategory().subscribe(
          (data:any)=>{
            data.forEach((e:any) => {
              if(e.subCategoryName==this.searchvalue){
                this.complaintService.getComplaintBySubCategoryId(e.id).subscribe((data)=>{this.table=data},(error)=>{})
              }
            });
          },(error)=>{
            alert("enter correct subcategory with sencetive case !!")
        })
      }
    }
  }
