import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ComplaintStatusService } from 'src/app/services/complaint-status.service';
import { ComplaintService } from 'src/app/services/complaint.service';
import { StatesService } from 'src/app/services/states.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';


@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent implements OnInit {

  title = "Add new Complaint"
  msg = ''
  category: any
  subCategory: any
  states: any
  status: any
  cid :any
  body = {
    id: 0,
    categoryId: 0,
    subcategoryId: 0,
    stateId: 0,
    statusId: 0,
    complaintDetails: ''
  }
  constructor(private cservice: CategoryService, private scservice: SubCategoryService,
    private sservice: StatesService, private cstatusservice: ComplaintStatusService,
    private _router: ActivatedRoute, private router: Router, private complaintService: ComplaintService,
    private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.cservice.getAllCategory().subscribe(
      (data) => {
        this.category = data
      },
      (error) => {
        this.msg = 'server category api loading error'
      }
    )
    this.sservice.getAllStates().subscribe(
      (data) => {
        this.states = data
      },
      (error) => {
        this.msg = 'server State Api loading error'
      }
    )
    this.cstatusservice.getAllStatus().subscribe(
      (data) => {
        this.status = data
        this.status.forEach((e: any) => {
          if (e.statusName == 'panding') {
            this.body.statusId = e.id
          }
        });
      },
      (error) => {
        this.msg = 'server Status Api loading error'
      }
    )

    this.cid = this._router.snapshot.params['id']
      this.complaintService.getComplaintByCid(this.cid).subscribe(
        (data:any) => {
       this.body.id=data.id
       this.body.stateId=data.stateId
       this.body.categoryId=data.categoryId
       this.body.complaintDetails=data.complaintDetails
       this.body.statusId=data.statusId
       this.body.subcategoryId=data.subcategoryId
      },
      (error) => {
      }
      )
    
  }
  subCategoryFun() {
    return this.scservice.getSubCategoryByCategory(this.body.categoryId).subscribe(
      (data) => {
        this.subCategory = data
      },
      (error) => {
        this.msg = 'server Subcategory loading error'
      })
  }
  
  formSubmit() {
    if (this.body.id == 0) {
      /// saved operation
      return this.complaintService.addNewComplaint(this.body).subscribe(
        (data) => {
          this.snack.open("saved Complaint successfully", "ok", { duration: 2000, verticalPosition: "bottom" })
        },
        (error) => {
          this.msg = "Not saved server errror"
        }
      )
    } else {
      /// update operation 
      return this.complaintService.updateExistComplaint(this.body, this.cid).subscribe(
        (data) => {
          this.snack.open("updated Complaint successfully", "ok", { duration: 2000, verticalPosition: "bottom" })
        },
        (error) => {
          this.msg = "Not updated server errror"
        }
      )
    }
  }
}
