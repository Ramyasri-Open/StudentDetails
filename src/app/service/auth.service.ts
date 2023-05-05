import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  students() {
    throw new Error('Method not implemented.');
  }
  saveStudents(data: any) {
    throw new Error('Method not implemented.');
  }
  url = 'http://localhost:3000/login';

  constructor(private http: HttpClient) {}

  GetAll() {
    return this.http.get(this.url);
  }
  Getbycode(code: any) {
    return this.http.get(this.url + '/' + code);
  }
  // ProceedLogin(inputdata: any) {
  //   return this.http.post(this.url, inputdata);
  // }
  // UpdateUser(code: any, inputdata: any) {
  //   return this.http.put(this.url + '/' + code, inputdata);
  // }
  // saveUser(data: any) {
  //   return this.http.post(this.url, data);
  // }
  IsloggedIn() {
    return sessionStorage.getItem('username') != null;
  }
  // saveForm(data: any) {
  //   return this.http.get(this.url, data);
  // }
  IsformIn() {
    return sessionStorage.getItem('name') != null;
  }
}
