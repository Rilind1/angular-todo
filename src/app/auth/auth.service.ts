import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

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
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) {}

  logout() {
    this.user.next(null);
    this.router.navigate(['/authenticate']);
  }

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
        }),
        tap((resData) => {
          const expirationDate = new Date(
            new Date().getTime() + +resData.expiresIn * 1000
          );
          const user = new User(
            resData.email,
            resData.localId,
            resData.idToken,
            expirationDate
          );
          this.user.next(user);
          localStorage.setItem('userData', JSON.stringify(user));
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<Data>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAiVbWKh2Umq0lXpp73oUBxVws7PmExXsk',
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
            case 'EMAIL_NOT_FOUND':
            case 'INVALID_PASSWORD':
              errorMsg = 'Credentials not valid';
          }
          return throwError(errorMsg);
        }),
        tap((resData) => {
          const expirationDate = new Date(
            new Date().getTime() + +resData.expiresIn * 1000
          );
          const user = new User(
            resData.email,
            resData.localId,
            resData.idToken,
            expirationDate
          );
          this.user.next(user);
        })
      );
  }
}
