import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicModule } from 'src/app/public/public.module';
import { environment } from 'src/environments/environment';
import { RestResponse } from '../interfaces/rest-response';

@Injectable({
  providedIn: PublicModule
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data:any):Observable<RestResponse>{
        return this.http.post<RestResponse>(`${environment.api}/`,data);
  }
}
