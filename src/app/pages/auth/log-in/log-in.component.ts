import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/lib/services/auth/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
    form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    constructor(private fb: FormBuilder, private auth: AuthService, private router:Router){
  
      }
  
      get email(){
        return this.form.get('email');
      }
    
      get password(){
        return this.form.get('password');
    
      }
  
      submit(){
        // console.log(this.email,this.password);
        this.auth.signIn(
          this.email?.value+'',
          this.password?.value+''
        ).then((user)=> {
          //navigate to admin/
          this.router.navigate(['admin/']);
          console.log(user);
        }).catch((error)=> {
          console.log(error)
        });
      }
      
}
