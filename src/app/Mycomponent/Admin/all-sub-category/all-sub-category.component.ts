import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-all-sub-category',
  templateUrl: './all-sub-category.component.html',
  styleUrls: ['./all-sub-category.component.css']
})
export class AllSubCategoryComponent implements OnInit {
  tableTitle="Sub Category List !!!"
  msg=''
  cid:any
  table:any
  constructor(private _router:ActivatedRoute,private subc:SubCategoryService) { }

  ngOnInit(): void {
  this.cid=this._router.snapshot.params['cid'];
  this.subc.getSubCategoryByCategory(this.cid).subscribe((data)=>{this.table=data},(error)=>{})
  }

}
