import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { startups } from 'src/app/lib/interfaces/startups';
import { DataService } from 'src/app/lib/services/data/data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  startups: startups = {
    sector: '',
    city: '',
    companyName: '',
    isApproved:true
  }
  startup:startups[] = [];
  constructor(private startupService:DataService, private router: Router){
  }


  submit(){
    //this.student.id = this.id++;
    this.startupService.addStartups({
      ...this.startups

     
    });
    
  }
}
