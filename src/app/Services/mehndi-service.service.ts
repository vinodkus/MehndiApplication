import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MehndiServiceService {
  apiUrl!:string;

  //private apiUrl = 'https://localhost:7190/api/Mehndi'; // Change to your actual API URL

  constructor(private http: HttpClient) {
  this.apiUrl = environment.apiUrl;
  }
  private createAuthorizationHeader(): HttpHeaders {
    debugger;
    const token = localStorage.getItem('authToken'); // Assuming you are storing the JWT in localStorage
    debugger;

    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
  getServices(professionalID: number): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<any[]>(`${this.apiUrl}/Mehndi/GetServices?professionalID=${professionalID}`, { headers });
  }

  addService(serviceData: any): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.post<any>(`${this.apiUrl}/Mehndi/AddService`, serviceData, { headers });
  }

  updateService(serviceData: any): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.post<any>(`${this.apiUrl}/Mehndi/UpdateService`, serviceData, { headers });
  }


  deleteService(serviceData: any): Observable<any> {
    debugger;
    const headers = this.createAuthorizationHeader();
    return this.http.post<any>(`${this.apiUrl}/Mehndi/DeleteService`, serviceData, { headers });
  }
}
