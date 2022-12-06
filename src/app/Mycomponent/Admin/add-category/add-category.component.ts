import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  title='Detail here !!!'
  cid=0
  msg:any
  category:any
  body={
    id:0,
    categoryName:'',
    categoryDescription:''
  }
  constructor(private service:CategoryService,private _router:ActivatedRoute,private router:Router,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.cid=this._router.snapshot.params['id']
    this.service.getCategoryById(this.cid).subscribe(
      (data)=>{
          this.category=data
          this.body.id=this.category.id
          this.body.categoryName=this.category.categoryName
          this.body.categoryDescription=this.category.categoryDescription
      },
      (error)=>{
      }
    )
  }
  formSubmit(){
    if(this.body.categoryName.trim()=='')
    return
   if(this.body.id==0 && this.cid!=0){
    return this.service.addNewCategory(this.body).subscribe(
      (data)=>{
       this.snack.open("Saved Successfully !!!","ok",{duration:2000,verticalPosition:"bottom"})
       this.router.navigate(['admin-dashboard/all-category'])
      },
      (error)=>{
       this.msg="Category saved server Connection  error !!!"
      }
    )
   }else{
  return this.service.updateExistCategory(this.body,this.cid).subscribe(
      (data)=>{
        this.snack.open("Updated Successfully !!!","ok",{duration:2000,verticalPosition:"bottom"})
        this.router.navigate(['admin-dashboard/all-category'])
      },
      (error)=>{
        this.msg="Category updated server Connection error  !!!"
      }
    )
   }
  }
}
