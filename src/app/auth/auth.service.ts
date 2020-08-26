import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthComponent } from './auth.component';

export interface Data {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}
  signup(email: string, password: string) {
    return this.http
      .post<Data>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAiVbWKh2Umq0lXpp73oUBxVws7PmExXsk',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((errorAuth) => {
          let errorMsg = 'An error is made';
          if (!errorAuth.error || !errorAuth.error.error) {
            return throwError(errorMsg);
          }
          switch (errorAuth.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMsg = 'This email exists!';
          }
          return throwError(errorMsg);
        })
      );
  }

  login(email: string, password: string) {
    return this.http.post<Data>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAiVbWKh2Umq0lXpp73oUBxVws7PmExXsk',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
