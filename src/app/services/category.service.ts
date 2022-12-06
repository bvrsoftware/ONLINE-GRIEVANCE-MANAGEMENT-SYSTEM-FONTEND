import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  
  // add New Category
  public addNewCategory(body:any){
    return this.http.post(baseUrl+"/api/category/",body)
  }
  // update ExistCategory by category id
  public updateExistCategory(body:any,cid:number){
    return this.http.put(baseUrl+"/api/category/"+cid,body)
  }
  // get All categories
  public getAllCategory(){
    return this.http.get(baseUrl+"/api/category/")
  }
  // get Category by categoryid
  public getCategoryById(cid:any){
    return this.http.get(baseUrl+"/api/category/"+cid)
  }
  // delete  Category by categoryId
  public deleteCategoryById(cid:any){
    return this.http.delete(baseUrl+"/api/category/"+cid)
  }
}
