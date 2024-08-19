import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment}from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl!:string;

  //private apiUrl= 'https://localhost:7190/api';

  constructor(private http: HttpClient) { 
  this.apiUrl = environment.apiUrl;

  }
  loginCustomer(loginData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Customer/login`, loginData); 
  }
  signupCustomer(signupData: any): Observable<any> {
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/Customer/SignupCustomer`, JSON.stringify(signupData), { headers });
  }
}
