import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MehndiServiceService {
  private apiUrl = 'https://localhost:7190/api/Mehndi'; // Change to your actual API URL

  constructor(private http: HttpClient) {}

  getServices(professionalID: number): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/GetServices?professionalID=${professionalID}`);
  }

  addService(serviceData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/AddService`, serviceData);
  }

  updateService(serviceData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/UpdateService`, serviceData);
  }

  deleteService(serviceID: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/DeleteService?serviceID=${serviceID}`);
  }
}
