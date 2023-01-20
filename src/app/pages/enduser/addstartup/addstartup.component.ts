
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
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
  latitudeAdd:any;
  longitudeAdd:any;

  mapLocation = {
    latitude : 30.5852,
    longitude : 36.2384
  } 

  markerLocation = {
    latitude: 31.9718,
    longitude:35.8339
  }

  public sectors: any;
  sectorClick?:string;
  UrlLogo?: string;
  startups: startups = {
    sector: '',
    city: '',
    companyName: '',
    isApproved:false,
    location:[]
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

  markerDragEnd( m: any, $event: any) {
    console.log($event);
         this.markerLocation.latitude  = $event.latLng.lat();
         this.markerLocation.longitude  = $event.latLng.lng();
      console.log(this.markerLocation);

      this.latitudeAdd=$event.latLng.lat();
      this.longitudeAdd=$event.latLng.lng();

      this.startups.location?.push(this.latitudeAdd);
      this.startups.location?.push(this.longitudeAdd);
      console.log("location "+ this.startups.location);
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
