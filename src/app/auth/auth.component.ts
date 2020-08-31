import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Data } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;
  isLoadingUser = false;
  errorMssg: string = null;

  constructor(private authService: AuthService, private router: Router) {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    let observable: Observable<Data>;

    this.isLoadingUser = true;

    if (this.isLoginMode) {
      observable = this.authService.login(email, password);
    } else {
      observable = this.authService.signup(email, password);
    }

    observable.subscribe(
      (data) => {
        console.log(data);
        this.isLoadingUser = false;
        this.router.navigate(['/todo-list']);
      },
      (errorMsg) => {
        console.log(errorMsg);
        this.errorMssg = errorMsg;
        this.isLoadingUser = false;
      }
    );
    form.reset();
  }
}
