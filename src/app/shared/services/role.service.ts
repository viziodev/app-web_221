import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestResponse } from '../interfaces/rest-response';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class RoleService extends RestService {
  override uri(): string {
    return "roles";
  }
  
}
