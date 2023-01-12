import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { startups } from 'src/app/lib/interfaces/startups';

import { DataService } from 'src/app/lib/services/data/data.service';
import { LogoService } from 'src/app/lib/services/storge/logo.service';

@Component({
  selector: 'app-addstartup',
  templateUrl: './addstartup.component.html',
  styleUrls: ['./addstartup.component.css']
})
export class AddstartupComponent {
  UrlLogo?: string;
  startups: startups = {
    sector: '',
    city: '',
    companyName: '',
    isApproved:false,
    // logo:this.UrlLogo,
  
  }
  startup:startups[] = [];
 
  constructor(private startupService:DataService, private router: Router,private logoSorege:LogoService){
  }
  submit(){
   
    this.startupService.addStartups({
      ...this.startups ,logo:this.UrlLogo  
    });
    alert("Thanks For Added")
    this.router.navigate(['']);
    
  }
  upload(event : any){
    const file = (event.target as HTMLInputElement)?.files?.[0];

    if (file) {

      this.logoSorege.uploadLogo(file).subscribe((value) => {
           console.log(value);
        this.UrlLogo = value;

      });

    }
  }
}
