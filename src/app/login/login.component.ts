import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private router: Router,
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService
  ) {
    sessionStorage.clear();
  }
  userdata: any;

  loginForm = this.builder.group({
    id: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
    // id: this.builder.control('', Validators.required),
  });
  proceedLogin() {
    if (this.loginForm.valid) {
      this.service.Getbycode(this.loginForm.value.id).subscribe((res) => {
        this.userdata = res;
        console.log(this.userdata);
        if (this.userdata.password === this.loginForm.value.password) {
          if (this.userdata.isactive) {
            sessionStorage.setItem('username', this.userdata.id);
            this.router.navigate(['/dashboard']);
          } else {
            this.toastr.error('Please contact admin');
          }
        } else {
          this.toastr.error('Invalid Credentials');
        }
      });
    }
  }
}
