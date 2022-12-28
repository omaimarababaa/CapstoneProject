import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  scrollChangeP=true;
  titleChange=true;
  titleH=false;
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
}
