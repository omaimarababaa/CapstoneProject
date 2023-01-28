import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { users } from '../../interfaces/users';

import { AuthService } from '../../services/auth/auth.service';
import { DataService } from '../../services/data/data.service';
import { UserFirebaseService } from '../../services/users/user-firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit,OnDestroy {
  menuVar: boolean = false;
  scrollChangeP: boolean = true;
  titleChange: boolean = true;
  titleH: boolean = false;
  isLoggedn: boolean = false;
  isAdmin: boolean = false;
  data: users[] = [];
  userid?: string;
  lenght:any;
  subscription?: Subscription;
  constructor(
    private auth: AuthService,
    private fireAuth: AngularFireAuth,
    private router: Router,
    private users: UserFirebaseService,
    private requstLenght:DataService
  ) {
    auth.userState$.subscribe((response) => {
      this.isLoggedn = response?.uid == null ? false : true;
    });
    // Cheack isAdmin
    this.users.getUser().subscribe((response) => {
      this.auth.user$.subscribe((user) => {
        this.userid = user?.uid;
        this.data = response;
        this.data.forEach((element) => {
          if (this.userid == element.userId) {
            if (element.isAdmin == true) this.isAdmin = true;
            else this.isAdmin = false;
          }
        });
      });
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
   }
  ngOnInit(): void {
  this.requstLenght.getStartupsRequest().subscribe(response=>{
    this.lenght= response.length;
    console.log(this.lenght);
  });

  }

  @HostListener('document:scroll')
  scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.scrollChangeP = false;
      this.titleChange = false;
      this.titleH = true;
    } else {
      this.scrollChangeP = true;
      this.titleChange = true;
      this.titleH = false;
    }
  }

  logOut() {
    this.fireAuth.signOut();
     this.router.navigate(['/']);
     setTimeout(function(){
      window.location.reload();
    },500);
    
  }
  openMenu() {
    this.menuVar = !this.menuVar;
  }
}
