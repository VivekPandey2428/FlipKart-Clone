import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseurl=  'https://reqres.in/api/';
  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get(this.baseurl+'users?page=2');
  }
  createUsers(data:any){
    return this.http.post(this.baseurl+"users",data);
  }
  LoginUserData(link:any){
    return this.http.post<any>(this.baseurl+"register",link);
  }
}
