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
  all(url: string | null = null): Observable<RestResponse> {
    if (url == null) {
      url = `${environment.api}/${this.uri()}`;
    }

    return this.http.get<RestResponse>(`${url}`);
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
