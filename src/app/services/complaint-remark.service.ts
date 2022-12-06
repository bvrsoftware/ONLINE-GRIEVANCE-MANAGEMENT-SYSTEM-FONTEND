import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ComplaintRemarkService {

  constructor(private http:HttpClient) { }

  //add new complaint Remark 
  public addNewcomplaintRemark(body:any){
    return this.http.post(baseUrl+"/api/complaintRemark/",body)
  }
  //update Existing complaint Remark 
  public updateExistcomplaintRemark(body:any,rid:number){
    return this.http.put(baseUrl+"/api/complaintRemark/"+rid,body)
  }
  //get  complaint Remark by Remark id
  public getcomplaintRemark(rid:number){
    return this.http.get(baseUrl+"/api/complaintRemark/"+rid)
  }
  //delete  complaint Remark by Remark id
  public deletecomplaintRemark(rid:number){
    return this.http.delete(baseUrl+"/api/complaintRemark/"+rid)
  }
}
