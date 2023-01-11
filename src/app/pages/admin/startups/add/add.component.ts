import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { startups } from 'src/app/lib/interfaces/startups';
import { DataService } from 'src/app/lib/services/data/data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  massage:any;
  startups: startups = {
    sector: '',
    city: '',
    companyName: '',
    isApproved:true
  }
  startup:startups[] = [];
  constructor(private startupService:DataService, private router: Router,private dialogRef: MatDialogRef<AddComponent>){
  }


  submit(){
    //this.student.id = this.id++;
    this.startupService.addStartups({
      ...this.startups
    });
  
  alert('Success For Added New Startups');
  
    this.dialogRef.close(true);
  }
}
