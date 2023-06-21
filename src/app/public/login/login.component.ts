import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'e221-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,private authService:AuthService) {
    this.form = this.fb.group({
      email: ['',Validators.required],
      password: '',
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    let data = this.form.getRawValue();
    this.authService.login(data)
  }
}
