import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  // get current login user detail from server
  public currentLoginUser(){
    return this.http.get(baseUrl+"/api/v1/current-user");
  }
  public getAllUser(){
    return this.http.get(baseUrl+"/api/user/users");
  }
  // generate Token or Login

  public generateToken(user:any){
  
    return this.http.post(baseUrl+"/api/v1/login",user)
  }
  
  // Login User : set token in LocalStorage
  public loginUser(token:any){
    localStorage.setItem("token",token)
    return true
  }
  // isLogin : user is login or not 
  public isLoggedIn(){
  let tokenStr=localStorage.getItem("token")
  if(tokenStr==undefined||tokenStr==''||tokenStr==null){
    return false
  }else{
    return true
  }
}
// logout : remove token from Local storage
public logOut(){
localStorage.removeItem("token")
localStorage.removeItem("user")
return true
}
// get Token
public getToken(){
  return localStorage.getItem("token")
}
// set UserDetail
public setUser(user:any){
localStorage.setItem("user",JSON.stringify(user))
  }
// get User
public getUser(){
  let userStr=localStorage.getItem("user");
  if(userStr!=null){
    return JSON.parse(userStr) 
  }else{
    this.logOut()
    return null;
  }
}
// get user role
public getUserRole(){
  let user=this.getUser();
  return user.authorities;
}
}
