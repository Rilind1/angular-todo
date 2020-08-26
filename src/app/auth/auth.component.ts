import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;
  isLoadingUser = false;
  errorMssg: string = null;

  constructor(private authService: AuthService) {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.isLoadingUser = true;

    if (this.isLoginMode) {
    } else {
      this.authService.signup(email, password).subscribe(
        (data) => {
          console.log(data);
          this.isLoadingUser = false;
        },
        (errorMsg) => {
          console.log(errorMsg);
          this.errorMssg = errorMsg;
          this.isLoadingUser = false;
        }
      );
    }
    form.reset();
  }
}
