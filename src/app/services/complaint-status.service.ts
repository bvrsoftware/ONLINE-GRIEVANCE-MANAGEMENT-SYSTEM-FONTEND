import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ComplaintStatusService {

  constructor(private http:HttpClient) { }

  // add new Complaint Status 
   public addNewStatus(status:any){
    return this.http.post(baseUrl+"/api/ComplaintStatus/",status)
   }
   // update existing Complaint Status 
   public updateExistStatus(status:any,statusId:number){
    return this.http.put(baseUrl+"/api/ComplaintStatus/"+statusId,status)
   }
   // get all  Complaint Status  list
   public getAllStatus(){
    return this.http.get(baseUrl+"/api/ComplaintStatus/")
   }
   // get status by Complaint Status Id
   public getStatusById(statusId:number){
    return this.http.get(baseUrl+"/api/ComplaintStatus/"+statusId)
   }
   // delete status by Complaint Status Id
   public deleteStatusById(statusId:number){
    return this.http.delete(baseUrl+"/api/ComplaintStatus/"+statusId)
   }
}
