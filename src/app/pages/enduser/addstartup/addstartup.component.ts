import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { startups } from 'src/app/lib/interfaces/startups';

import { DataService } from 'src/app/lib/services/data/data.service';
import { SectorsService } from 'src/app/lib/services/secotrs/sectors.service';
import { LogoService } from 'src/app/lib/services/storge/logo.service';

@Component({
  selector: 'app-addstartup',
  templateUrl: './addstartup.component.html',
  styleUrls: ['./addstartup.component.css']
})
export class AddstartupComponent {
  public sectors: any;
  sectorClick?:string;
  UrlLogo?: string;
  startups: startups = {
    sector: '',
    city: '',
    companyName: '',
    isApproved:false,
    // logo:this.UrlLogo,
  
  }
  startup:startups[] = [];
 
  constructor(private startupService:DataService, private router: Router,private logoSorege:LogoService,private getsector:SectorsService){
  }
  public ngOnInit(): void {
   
    this.sectors = this.getsector.getSectors().subscribe((response) => {
      this.sectors = response;
    });
  }
  getValue(key:any){
    this.sectorClick = key.target.value;
    console.log(this.sectorClick)
    }
    
  submit(){
    console.log("this.startups,this.UrlLogo,this.sectorClick")
    console.log(this.startups,this.UrlLogo,this.sectorClick)
    this.startupService.addStartups({
      ...this.startups,logo:this.UrlLogo,sector:this.sectorClick
      
    }).subscribe(()=>{
      alert("Thanks For Added, Please wait the admin approval")
      window.location.reload();
    });
   
    // 
    
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
