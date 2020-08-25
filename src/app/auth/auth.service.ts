import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Data {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}
  signup(email: string, password: string) {
    return this.http.post<Data>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAiVbWKh2Umq0lXpp73oUBxVws7PmExXsk',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
