import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  apiURL = 'http://localhost:3000/carddeets';
  
  getAllData(): Observable<any> {
    return this._http.get(`${this.apiURL}`)
  }


  createData(data:any): Observable<any> {
    return this._http.post(`${this.apiURL}`,data)
  }
}
