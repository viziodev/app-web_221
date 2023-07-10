import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestResponse } from '../interfaces/rest-response';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends RestService {
  override uri(): string {
    return 'users';
  }
  
}
