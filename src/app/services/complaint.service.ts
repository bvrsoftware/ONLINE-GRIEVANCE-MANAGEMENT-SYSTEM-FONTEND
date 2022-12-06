import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http:HttpClient) { }

  // add New Complaint
  public addNewComplaint(body:any){
    return this.http.post(baseUrl+"/api/complaints/",body)
  }
  // update Exiting Complaint by complaint id
  public updateExistComplaint(body:any,cid:number){
    return this.http.put(baseUrl+"/api/complaints/"+cid,body)
  }
  // update Exiting Complaint Status by complaint id and status id
  public updateExistComplaintStatus(sid:number,cid:number){
    return this.http.put(baseUrl+"/api/complaints/status/"+cid+"/"+sid,'')
  }
  // get Complaint by complaint id
  public getComplaintByCid(cid:number){
    return this.http.get(baseUrl+"/api/complaints/"+cid)
  }
  // get Complaint by complaint status id
  public getComplaintByStatusId(sid:number){
    return this.http.get(baseUrl+"/api/complaints/complaintStatus/"+sid)
  }
  // get Complaint by state id
  public getComplaintByStateId(sid:number){
    return this.http.get(baseUrl+"/api/complaints/states/"+sid)
  }
  // get Complaint by category id
  public getComplaintByCategoryId(cid:number){
    return this.http.get(baseUrl+"/api/complaints/category/"+cid)
  }
  // get Complaint by sub category id
  public getComplaintBySubCategoryId(sid:number){
    return this.http.get(baseUrl+"/api/complaints/subCategory/"+sid)
  }
  // get Complaint by user id
  public getComplaintByUserId(uid:number){
    return this.http.get(baseUrl+"/api/complaints/user/"+uid)
  }
  // get All Complaints 
  public allComplaint(){
   return this.http.get(baseUrl+"/api/complaints/complaints")
  }
}
