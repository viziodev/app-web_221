import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestResponse } from 'src/app/shared/interfaces/rest-response';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'e221-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    let data = this.form.getRawValue();
    
    this.authService.login(data).subscribe((res: RestResponse) => {
      localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/dashboard');
    });
  }
}
