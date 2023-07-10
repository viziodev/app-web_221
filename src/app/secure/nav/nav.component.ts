import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/shared/classes/auth';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'e221-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private router: Router) {}
 user? :User
  ngOnInit(): void {
    this.user=Auth.user
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
