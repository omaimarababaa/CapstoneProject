import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { startups } from 'src/app/lib/interfaces/startups';
import { DataService } from 'src/app/lib/services/data/data.service';
import { SectorsService } from 'src/app/lib/services/secotrs/sectors.service';
import { LogoService } from 'src/app/lib/services/storge/logo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  public sectors:any;
  sectorClick?:string;
  UrlLogo?:string;
  massage:any;
  startups: startups = {
    sector: '',
    city: '',
    companyName: '',
    isApproved:true
  }
  startup:startups[] = [];
  constructor(private startupService:DataService, private router: Router,private getsector:SectorsService
    ,private dialogRef: MatDialogRef<AddComponent>,private logoSorege:LogoService){
  }
  public ngOnInit(): void {
   
    this.sectors = this.getsector.getSectors().subscribe((response) => {
      this.sectors = response;
    });
  }
  getValue(key:any){
    this.sectorClick = key.target.value;
    }

  submit(){
    this.startupService.addStartups({
      ...this.startups,logo:this.UrlLogo ,sector:this.sectorClick
    });
  
  alert('Success For Added New Startups');
  
    this.dialogRef.close(true);
  }
  upload(event : any){
    const file = (event.target as HTMLInputElement)?.files?.[0];

    if (file) {

      this.logoSorege.uploadLogo(file).subscribe((value) => {
          
        this.UrlLogo = value;

      });

    }
  }
}
