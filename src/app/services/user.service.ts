import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  // Add user 
  public newUser(user:any){
   return this.http.post(baseUrl+"/api/v1/register",user)
  }
  // update exist user
  public updateExistUser(user:any,userid:number){
    return this.http.put(baseUrl+"/api/user/"+userid,user)
  }
  // get All users 
  public getAllUsers(){
   return this.http.get(baseUrl+"/api/user/users")
  }
  // get user By user id 
  public getUserById(userId:number){
    return this.http.get(baseUrl+"/api/user/"+userId)
  }
  // get current login user Details
  public getCurrentLoginUserDetail(username:string){
    return this.http.get(baseUrl+"/api/user/current-user/"+username)
  }
  // change profile photo
  upload(newForm:any,uid:number) {
    
    return this.http.post(baseUrl+'/api/upload/image/'+uid,newForm);
  }
  // change user password  
    public changeUserPassword(body:any,uid:number){
    return this.http.post(baseUrl+"/api/user/change-password/"+uid,body)
  }
  // dowload read file and photo
  public downloadDocument(fileName:any):Observable<Blob>{
    return this.http.get(baseUrl+"/api/upload/files/"+fileName,{responseType:'blob'})
  }
}
