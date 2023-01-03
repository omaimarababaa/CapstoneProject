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
    companyName: ''
  }
  startup:startups[] = [];
  constructor(private studentsService:DataService, private router: Router){
  }


  submit(){
    //this.student.id = this.id++;
    this.studentsService.addStartups({
      ...this.startups

     
    });
    // .subscribe({
      
    // next: (response)=> {
       
    // },
    // error: (error)=> {
    //   alert(JSON.stringify(error));
    // },
    // complete: ()=> console.log('completed')
  // });
    //navigate
  }
}
