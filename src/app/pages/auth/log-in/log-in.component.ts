import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { users } from 'src/app/lib/interfaces/users';
import { AuthService } from 'src/app/lib/services/auth/auth.service';
import { UserFirebaseService } from 'src/app/lib/services/users/user-firebase.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit ,OnDestroy{
  massegError:string | undefined;
  userInfo: users[] = [];
  userid?: string;
  
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  subscription?: Subscription;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private users: UserFirebaseService
  ) {}
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
   }
  ngOnInit(): void {}

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  submit() {
    this.auth
      .signIn(this.email?.value + '', this.password?.value + '')
      .then((response) => {
        this.users.getUser().subscribe((response) => {
          this.auth.user$.subscribe((user) => {
            this.userid = user?.uid;
            this.userInfo = response;
            this.userInfo.forEach((element) => {
              // check is user or admin
              if (this.userid == element.userId) {
                if (element.isAdmin == true) 
                this.router.navigate(['admin/']);
                else this.router.navigate(['addstartup/']);
              }
            });
          });
        });
      })
      .catch(() => {
         this.massegError="Email Or Password Is Incorrect";
      });
    
  }
}
