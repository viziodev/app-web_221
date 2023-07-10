import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RestResponse } from '../interfaces/rest-response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: any): Observable<RestResponse> {
    return this.http.post<RestResponse>(`${environment.api}/login`, data);
  }
  currentUser(): Observable<RestResponse> {
    return this.http.get<RestResponse>(`${environment.api}/user/current`);
  }

  
}
