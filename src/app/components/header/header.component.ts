import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ){}

  public isLoggedIn(){
    return this.authService.isLoggedIn()
  }

  badgevisible = false;
  
  badgevisibility() {
    this.badgevisible = true;
  }

  public logout() {
    this.authService.removeToken();
    this.router.navigate(['/']);
  }
}
