import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Roles } from '../shared/enums';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router,
  ) {}

  registerForm = this.builder.group({
    firstName:this.builder.control('', Validators.compose([Validators.required])),
    lastName:this.builder.control('', Validators.compose([Validators.required])),
    login:this.builder.control('',
      Validators.compose([
        Validators.required,
        Validators.min(3),
        Validators.max(20)
      ])),
    password:this.builder.control('',
      Validators.compose([
        Validators.required,
        Validators.min(3),
        Validators.max(20),
      ])),
    isActive: this.builder.control(false),
  });

  async proceedRegistration () {
    if (this.registerForm.valid) {
      (await this.service.registerWorker(this.registerForm.value)).subscribe(res => {
        this.toastr.success('Вы успешно зарегистировались', 'Ваш профиль будет активирован после подтверждения администратором');
        this.router.navigate(['/login'])
      })
    } else {
      this.toastr.warning('Заполните все поля')
    }
  }
}
