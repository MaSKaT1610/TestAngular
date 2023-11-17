import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UsersService } from 'src/app/components/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private usersService: UsersService
  ) {
    this.error = {} as ElementRef;
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  close() {
    this.error.nativeElement.classList.remove('error-open');
  }

  @ViewChild('error') error: ElementRef;

  LogIn() {
    if (this.loginForm.invalid) {
      this.error.nativeElement.classList.add('error-open');
      return;
    }

    for (let i = 0; i < this.usersService.users.length; i++) {
      const user = this.usersService.users[i];
      if (
        this.email?.value === user.email &&
        this.password?.value?.toString() === user.password
      ) {
        this.authService.logIn(user);
        this.router.navigate(['home']);
      }
    }
  }
}
