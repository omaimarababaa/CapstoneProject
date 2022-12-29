import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { users } from 'src/app/lib/interfaces/users';
import { AuthService } from 'src/app/lib/services/auth/auth.service';
import { UserFirebaseService } from 'src/app/lib/services/users/user-firebase.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  data: users[] = [];
  // adminCheck:{}[] = [];
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private users: UserFirebaseService
  ) {}
  ngOnInit(): void {
    
  }

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
        console.log(response);
        this.users.getUser().subscribe((response) => {
          this.data = response;
          this.data.forEach((element) => {
            console.log(element.email + ' eeee  ' + this.email?.value +"Admin" + this.email?.value);
                 if(this.email?.value == element.email ){
                  console.log("Admin" +element.isAdmin);
                  if(element.isAdmin == true)
                     this.router.navigate(['admin/']);
                     else
                    this.router.navigate(['user/']); 
                  } 
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
