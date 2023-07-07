import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router,
  ) {}

  loading = false;

  loginForm = this.builder.group({
    login:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.required),
  });
  
  async proceedLogin () {
    if (this.loginForm.valid) {
      this.loading = true; 
      (await this.service.loginWorker(this.loginForm.value)).subscribe(res => {
        this.toastr.success('Вы успешно авторизовались');
        this.router.navigate(['/']);
        this.loading = false; 
      })
    } else {
      this.toastr.warning('Что-то пошло не так')
    }
  }
}
