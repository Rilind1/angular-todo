import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  NgForm,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  invalidEmail: string;

  constructor(private signupBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form.value.email);
  }
}
