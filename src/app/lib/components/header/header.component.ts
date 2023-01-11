import { Component, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { users } from '../../interfaces/users';

import { AuthService } from '../../services/auth/auth.service';
import { UserFirebaseService } from '../../services/users/user-firebase.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  scrollChangeP:boolean=true;
  titleChange:boolean=true;
  titleH:boolean=false;
  isLoggedn:boolean=false;
  isAdmin:boolean=false;
  data: users[] = [];
  userid?: string;
  constructor(private auth:AuthService,private fireAuth:AngularFireAuth,
    private router: Router, private users: UserFirebaseService ){
    auth.userState$.subscribe(response=> {
      this.isLoggedn = response?.uid == null ? false:true;
    });
  // Cheack isAdmin
    this.users.getUser().subscribe((response) => {
      this.auth.user$.subscribe((user) => {
        this.userid = user?.uid;
        this.data = response;
        this.data.forEach((element) => {
          if (this.userid == element.userId) {
            if (element.isAdmin == true) 
            this.isAdmin=true;
            else   this.isAdmin=false;
          }
        });
      });
    });

  }
  @HostListener("document:scroll")
   scrollFunction (){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ){
      this.scrollChangeP=false;
      this.titleChange=false;
      this.titleH=true;
    }
    else{
       this.scrollChangeP=true;
       this.titleChange=true;
       this.titleH=false;
    }
   }

   logOut(){
     this.fireAuth.signOut();
     this.router.navigate(['']);
  }

}
