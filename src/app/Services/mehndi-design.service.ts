import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AddMehndiDesignResponse } from './Interfaces/AddMehndiDesignResponse';

@Injectable({
  providedIn: 'root'
})
export class MehndiDesignService {
  apiUrl!:string;



  constructor(private http: HttpClient) {
  this.apiUrl = environment.apiUrl;

   }
   // Helper method to create headers with the authorization token
  private createAuthorizationHeader(): HttpHeaders {
    debugger;
    const token = localStorage.getItem('authToken'); // Assuming you are storing the JWT in localStorage
    debugger;

    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
  addMehndiDesign(designData: FormData):Observable<AddMehndiDesignResponse> {
    const headers = this.createAuthorizationHeader();

    return this.http.post<AddMehndiDesignResponse>(`${this.apiUrl}/Mehndi/AddMehndiDesign`, designData, { headers });
  }
  updateMehndiDesign(designData: FormData):Observable<AddMehndiDesignResponse> {
    const headers = this.createAuthorizationHeader();

    return this.http.post<AddMehndiDesignResponse>(`${this.apiUrl}/Mehndi/UpdateMehndiDesign`, designData, { headers });
  }
  getDesigns(professionalID: number): Observable<any[]> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<any[]>(`${this.apiUrl}/Mehndi/GetDesigns?professionalID=${professionalID}`, { headers });
  }
  deleteDesign(designId:number):Observable<any>{
    const headers = this.createAuthorizationHeader();
    return this.http.delete<any>(`${this.apiUrl}/Mehndi/DeleteDesign?designId=${designId}`, { headers });
  }
}
