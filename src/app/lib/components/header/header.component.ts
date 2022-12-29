import { Component, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { users } from '../../interfaces/users';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  scrollChangeP:boolean=true;
  titleChange:boolean=true;
  titleH:boolean=false;
 
  constructor(public auth:AuthService,private fireAuth:AngularFireAuth ){
    
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
    return this.fireAuth.signOut();
  }
}
