import { HttpClient } from '@angular/common/http';
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
  addMehndiDesign(designData: FormData):Observable<AddMehndiDesignResponse> {
    return this.http.post<AddMehndiDesignResponse>(`${this.apiUrl}/Mehndi/AddMehndiDesign`, designData);
  }
  getDesigns(professionalID: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Mehndi/GetDesigns?professionalID=${professionalID}`);
  }
  deleteDesign(designId:number):Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/Mehndi/DeleteDesign?designId=${designId}`);
  }
}
