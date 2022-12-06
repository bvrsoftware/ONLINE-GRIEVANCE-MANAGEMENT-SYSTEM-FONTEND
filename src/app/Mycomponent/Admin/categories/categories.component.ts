import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  tableTitle='All Categories'
  table:any=[]
  msg=''
  constructor(private service:CategoryService,private snack:MatSnackBar) {
  }

  ngOnInit(): void {
     this.service.getAllCategory().subscribe(
      (data)=>{
       this.table=data
      },
      (error)=>{
        this.msg='service connection problem'
      }
    )
  }
}
