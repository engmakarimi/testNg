import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserInfo } from 'src/app/mock/user-info';
import { generateToken } from 'src/app/helpers';
import { Employee } from '../../employee/types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private isLoggedIn=false;
 get IsLoggedIn(){
  return !!localStorage.getItem('token');
 }
  private userName:string;
  get UserName(){
    return localStorage.getItem('userName');

  }
  private userInfo:Partial<Employee>;
  get UserInfo(){
    return JSON.parse(localStorage.getItem('userInfo')!) ;

  }

  login(username: string, password: string) {
    if(username === UserInfo.userName && password === UserInfo.password){
      this.isLoggedIn = true;
      const token = generateToken(8);
      localStorage.setItem('token', token);
      localStorage.setItem('userName', UserInfo.userName);
      localStorage.setItem('userInfo', JSON.stringify(UserInfo.info));
    }
    this.userName = username;
    return of(this.isLoggedIn);
  }

  logout(){
    this.isLoggedIn = false;
    this.userName='';
    this.userInfo={}
    localStorage.clear();
    return of(true)
  }
}
