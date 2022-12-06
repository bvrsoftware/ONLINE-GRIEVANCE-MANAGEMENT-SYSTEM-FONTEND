import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(private http:HttpClient) { }
  
  //add new Sub Category
  public addNewSubCategory(body:any){
    return this.http.post(baseUrl+"/api/subCategory/",body)
  }
  //update existing Sub Category
  public updateExistSubCategory(body:any,scId:number){
    return this.http.put(baseUrl+"/api/subCategory/"+scId,body)
  }
  // get All Sub Category
  public getAllSubCategory(){
    return this.http.get(baseUrl+"/api/subCategory/")
  }
  // get Sub Category by SubCategoryId
  public getSubCategoryById(scId:number){
    return this.http.get(baseUrl+"/api/subCategory/"+scId)
  }
  // get Sub Category by CategoryId
  public getSubCategoryByCategory(cId:number){
    return this.http.get(baseUrl+"/api/subCategory/category/"+cId)
  }
  //delete Sub Category By SubCategoryId 
  public deleteSubCategoryById(scId:number){
    return this.http.delete(baseUrl+"/api/subCategory/"+scId)
  }
}
