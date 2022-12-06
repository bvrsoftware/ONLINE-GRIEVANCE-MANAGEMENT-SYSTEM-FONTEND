import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintRemarkService } from 'src/app/services/complaint-remark.service';
import { ComplaintStatusService } from 'src/app/services/complaint-status.service';
import { ComplaintService } from 'src/app/services/complaint.service';

@Component({
  selector: 'app-add-complaint-remark',
  templateUrl: './add-complaint-remark.component.html',
  styleUrls: ['./add-complaint-remark.component.css']
})
export class AddComplaintRemarkComponent implements OnInit {
  title = "Complaint Remark"
  complaintDetail = ''
  status: any
  remarkId: any
  body = {
    id: 0,
    statusId: 0,
    complaintId: 0,
    remark: ''
  }
  constructor(
    private _router: ActivatedRoute,
    private router: Router,
    private complaintService: ComplaintService,
    private remarkService: ComplaintRemarkService,
    private statusService: ComplaintStatusService,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {
    let cid = this._router.snapshot.params['cid']
    this.remarkId = this._router.snapshot.params['rid']
    this.statusService.getAllStatus().subscribe((data: any) => { this.status = data }, (error) => { })
    this.complaintService.getComplaintByCid(cid).subscribe((data: any) => {
      this.body.complaintId = parseInt(data.id)
      this.complaintDetail = data.complaintDetails
      this.body.statusId = parseInt(data.statusId)
    }, (error) => { })
  }
  setStatusIsFun() {
    this.complaintService.updateExistComplaintStatus(this.body.statusId,this.body.complaintId).subscribe(
      (data)=>{   },
      (error)=>{      }
    )
  }
  formSubmit() {

    if(this.body.remark.trim()==''){
      this.snack.open("enter some data in remark", "ok", { duration: 2000, verticalPosition: "bottom" })
      return
    }
    if (this.body.id == 0) {
      //saved 
      this.remarkService.addNewcomplaintRemark(this.body).subscribe(
        (data) => {
          this.snack.open("Saved Successfully !!!", "ok", { duration: 2000, verticalPosition: "bottom" })
          this.router.navigate(['admin-dashboard'])
        }, (error) => {

        })
    } else {
      //update
      this.remarkService.updateExistcomplaintRemark(this.body, this.body.id).subscribe(
        (data) => {
          this.snack.open("update Successfully !!!", "ok", { duration: 2000, verticalPosition: "bottom" })
          this.router.navigate(['admin-dashboard'])
        }, (error) => {

        })
    }
  }

}
