import { RestResponse } from 'src/app/shared/interfaces/rest-response';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Auth } from '../shared/classes/auth';
import { User } from '../shared/interfaces/user';

@Component({
  selector: 'e221-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
   //user?:User
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
       this.authService.currentUser().subscribe((res:RestResponse)=>{
         Auth.user = res.data; 
         console.log(Auth.user);
        // this.user = Auth.user;
       })
  }

}
