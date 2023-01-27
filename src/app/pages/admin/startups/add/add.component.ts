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
  latitudeAdd:any;
  longitudeAdd:any;

  mapLocation = {
    latitude: 31.9539,
    longitude: 35.9106,
  } 

  markerLocation = {
    latitude: 31.9718,
    longitude:35.8339
  }
  public sectors:any;
  sectorClick?:string;
  UrlLogo?:string;
  massage:any;
  startups: startups = {
    sector: '',
    city: '',
    companyName: '',
    isApproved:true,
    location:[]=[]
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
    markerDragEnd( m: any, $event: any) {
      console.log($event);
           this.markerLocation.latitude  = $event.latLng.lat();
           this.markerLocation.longitude  = $event.latLng.lng();
        console.log(this.markerLocation);
  
        this.latitudeAdd=$event.latLng.lat();
        this.longitudeAdd=$event.latLng.lng();
  
        // this.startups.location?.push(this.latitudeAdd);
        // this.startups.location?.push(this.longitudeAdd);
        // console.log("location "+ this.startups.location);
      }
      latchang($event:any){
        console.log($event);
        console.log($event.target.value);
        this.latitudeAdd=$event.target.value;
        // this.startups.location?.push(this.latitudeAdd);
     
      }
      lngchang($event:any){
        console.log($event);
       console.log($event.target.value);
       this.longitudeAdd=$event.target.value;
      //  this.startups.location?.push(this.longitudeAdd);
      }

  submit(){
        
    this.startups.location?.push(parseFloat(this.latitudeAdd));
    this.startups.location?.push(parseFloat(this.longitudeAdd));
    
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
