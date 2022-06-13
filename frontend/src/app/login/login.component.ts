import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { AUTH } from '../auth/auth.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: LoginService,
  ) { }

  get f() { return this.loginForm.controls; }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    const json_list = {
      username: this.f.username.value,
      password: this.f.password.value
    }

    this.http.UserAuthorization(json_list).subscribe(response => {
      console.log(response)
      if (response.status == "success") {
        localStorage.removeItem(AUTH);
        localStorage.setItem(AUTH, response.session_id);
        this.router.navigate(['/home']);
      };
    })
  }

}
