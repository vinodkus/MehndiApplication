import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  private apiUrl= 'https://localhost:7190/api/Professional';
  constructor(private http: HttpClient) { }
  loginProfessional(loginData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }


  signupProfessional(signupData: any): Observable<any> {
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/SignupProfessional`, JSON.stringify(signupData), { headers });
  }
}
