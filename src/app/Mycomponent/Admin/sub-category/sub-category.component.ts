import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
  title='Add New Sub Category'
  table:any
  body={
    id:0,
    categoryId:0,
    subCategoryName:''
  }
  constructor(private _router:ActivatedRoute,private subc:SubCategoryService,private router:Router,private category:CategoryService) { }
  ngOnInit(): void {
    this.category.getAllCategory().subscribe((data)=>{this.table=data},(error)=>{})
  this.body.id=parseInt(this._router.snapshot.params['id']);
  if(this.body.id>0){
    this.subc.getSubCategoryById(this.body.id).subscribe(
      (data:any)=>{
       this.body.categoryId=parseInt(this._router.snapshot.params['cid']); 
       this.body.subCategoryName=data.subCategoryName
      },
      (error)=>{}
    )
  }
  }
formSubmit(){
if(this.body.id>0){
  this.subc.updateExistSubCategory(this.body,this.body.id).subscribe(
    (data)=>{
      alert('success')
    },
    (error)=>{})
}else{
this.subc.addNewSubCategory(this.body).subscribe(
  (data)=>{
    alert('success')
  },
  (error)=>{}
)}
}
}
