import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CookieService } from 'ngx-cookie-service';

interface LoginResponse {
  token: string;
  user?: {
    id: number;
    firstName: string;
    lastName: string;
    login: string;
    active: boolean;
    isAdmin: boolean;
    isMaster: boolean;
    // ... other properties
  };
}

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
    private cookieService: CookieService
  ) {}

  loading = false;

  loginForm = this.builder.group({
    login:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.required),
  });
  
  async proceedLogin () {
    if (this.loginForm.valid) {
      this.loading = true; 
      (await this.service.loginWorker(this.loginForm.value)).subscribe((res: any) => {
        this.toastr.success('Вы успешно авторизовались');
        const token = res.token;
        this.cookieService.set('token', token);
        this.router.navigate(['/']);
        this.loading = false; 
        console.log('==============RES===============', res);
        
      }, (err) => {
        console.log(err);
        
      })
    } else {
      this.toastr.warning('Что-то пошло не так')
    }
  }
}
