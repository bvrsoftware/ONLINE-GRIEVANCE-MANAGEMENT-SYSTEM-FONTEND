import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(private http:HttpClient) { }

  // create new state
  public createNewState(states:any){
   return this.http.post(baseUrl+"/api/state/",states)
  }
// Update existe state
public updateExistState(states:any,stateId:number){
  return this.http.put(baseUrl+"/api/state/"+stateId,states)
}
//get all states list
public getAllStates(){
  return this.http.get(baseUrl+"/api/state/")
}
// get state by state id
public getStateById(stateId:number){
  return this.http.get(baseUrl+"/api/state/"+stateId)
}
// delete state by delete id
 public deleteStateById(stateId:number){
  return this.http.delete(baseUrl+"/api/state/"+stateId)
 }
}
