import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { sectors } from 'src/app/lib/interfaces/sectors';
import { SectorsService } from 'src/app/lib/services/secotrs/sectors.service';

@Component({
  selector: 'app-addsector',
  templateUrl: './addsector.component.html',
  styleUrls: ['./addsector.component.css']
})
export class AddsectorComponent {
  massge:any;
  sectors: sectors = {
    sectorName: '',
    logo:'',
    city:'',
    designcolor:'',
    ParentCategoryName:''
  }
  sector:sectors[] = [];
  constructor(private sectorAdd:SectorsService,  private router: Router,private dialogRef: MatDialogRef<AddsectorComponent>){
  }
  submit(){
    //this.student.id = this.id++;
    this.sectorAdd.addSsctor({
      ...this.sectors,
      
      
    });
      this.massge='success';
    // this.dialogRef.close(true);
    
  }
}
