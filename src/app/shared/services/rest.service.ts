import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestResponse } from '../interfaces/rest-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export abstract class RestService {
  abstract uri(): string;
  constructor(private http: HttpClient) {}
  all(): Observable<RestResponse> {
    return this.http.get<RestResponse>(`${environment.api}/${this.uri()}`);
  }
  create(data: any): Observable<RestResponse> {
    return this.http.post<RestResponse>(
      `${environment.api}/${this.uri()}`,
      data
    );
  }

  update(id: number, data: any): Observable<RestResponse> {
    return this.http.put<RestResponse>(
      `${environment.api}/${this.uri()}/${id}`,
      data
    );
  }
}
