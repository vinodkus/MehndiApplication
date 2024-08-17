import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl= 'https://localhost:7190/api/Customer';

  constructor(private http: HttpClient) { }
  loginCustomer(loginData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginData); 
  }
  signupCustomer(signupData: any): Observable<any> {
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/SignupCustomer`, JSON.stringify(signupData), { headers });
  }
}
