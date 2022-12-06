import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { StatesService } from 'src/app/services/states.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  tableTitle='All States'
  states:any=[]
  msg=''
  constructor(private service:StatesService,public _router:Router,private snack:MatSnackBar) {  
    this.service.getAllStates().subscribe(
      (data)=>{
       this.states=data
      },
      (error)=>{
        this.msg='service connection problem'
      }
    )
   }
  
  ngOnInit(): void {
  }

}
