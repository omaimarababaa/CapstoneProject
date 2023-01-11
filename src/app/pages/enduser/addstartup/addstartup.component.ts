import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { startups } from 'src/app/lib/interfaces/startups';

import { DataService } from 'src/app/lib/services/data/data.service';

@Component({
  selector: 'app-addstartup',
  templateUrl: './addstartup.component.html',
  styleUrls: ['./addstartup.component.css']
})
export class AddstartupComponent {
  startups: startups = {
    sector: '',
    city: '',
    companyName: '',
    isApproved:false
  }
  startup:startups[] = [];
  constructor(private startupService:DataService, private router: Router){
  }
  submit(){
   
    this.startupService.addStartups({
      ...this.startups   
    });
    alert("Thanks For Added")
    this.router.navigate(['']);
    
    
  }
}
