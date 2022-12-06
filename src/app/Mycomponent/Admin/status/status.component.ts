import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComplaintStatusService } from 'src/app/services/complaint-status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  tableTitle='All Status'
  table:any=[]
  msg=''
  constructor(private service:ComplaintStatusService,private snack:MatSnackBar) { 
   
  }

   getAllStatus(){
    return this.service.getAllStatus().subscribe(
      (data)=>{
       this.table=data
      },
      (error)=>{
        this.msg='service connection problem'
      }
    )
  }
  ngOnInit(): void {
    this.getAllStatus();
  }
}
