import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userState$ = this.fireAuth.authState;
  user$ = this.fireAuth.user;
  constructor(private fireAuth: AngularFireAuth) {}

  signIn(email: string, password: string) {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }
}
