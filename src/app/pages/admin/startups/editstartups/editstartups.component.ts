import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { startups } from 'src/app/lib/interfaces/startups';
import { DataService } from 'src/app/lib/services/data/data.service';
import { SectorsService } from 'src/app/lib/services/secotrs/sectors.service';
import { LogoService } from 'src/app/lib/services/storge/logo.service';

@Component({
  selector: 'app-editstartups',
  templateUrl: './editstartups.component.html',
  styleUrls: ['./editstartups.component.css'],
})
export class EditstartupsComponent implements OnInit,OnDestroy {
  latitudeAdd: any;
  longitudeAdd: any;
  mapLocation = {
    latitude: 31.9539,
    longitude: 35.9106,
  };
  public sectors: any;
  public startups: any;
  public companyInfo?: any;
  lat: any;
  lng: any;
  hide: boolean = false;
  sectorClick?: string;
  UrlLogo?: string;
  id!: string;
  markerLocation: number[] = [];
  zoom!: number;
  startup: any;

  constructor(
    private route: ActivatedRoute,
    private editstartup: DataService,
    private fs: AngularFirestore,
    private router: Router,
    private logoSorege: LogoService,
    private getsector: SectorsService
  ) {
   this.startup= this.route.params.subscribe((data) => {
      return (this.startups = data['id']);
    });
  }
  ngOnDestroy(): void {
    this.startup.unsubscribe();
  }
  ngOnInit(): void {
    this.getStartupById();
    this.getAllSectors();
  }
  getStartupById() {
     this.zoom = 10;
    this.fs
      .collection<startups>('Startups')
      .doc(this.startups)
      .valueChanges()
      .subscribe((response) => {
        if (response) this.companyInfo = response;
      });
  }
  getAllSectors() {
    this.sectors = this.getsector.getSectors().subscribe((response) => {
      this.sectors = response;
    });
  }
  // Edit by map
  markerDragEnd($event: any) {
  
    this.latitudeAdd = $event.latLng.lat();
    this.longitudeAdd = $event.latLng.lng();
   
  }
  // edit lat by input
  latchang($event: any) {
    this.latitudeAdd = $event.target.value;
  }
  // edit lng by input
  lngchang($event: any) {
    this.longitudeAdd = $event.target.value;
  }

  upload(event: any) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      this.logoSorege.uploadLogo(file).subscribe((value) => {
        this.UrlLogo = value;
        this.hide = true;
      });
    }
  }

  getValue(key: any) {
    this.sectorClick = key.target.value;
  }

  editStartup(startupE: any) {
    if (this.UrlLogo && this.sectorClick) {
      this.editstartup.updateStartup(this.startups, {
        ...startupE,
        logo: this.UrlLogo,
        sector: this.sectorClick,
      });
    } else if (this.UrlLogo) {
      this.editstartup.updateStartup(this.startups, {
        ...startupE,
        logo: this.UrlLogo,
      });
    } else if (this.markerLocation && this.latitudeAdd) {
      this.markerLocation.push(this.latitudeAdd);
      this.markerLocation.push(this.longitudeAdd);
      this.editstartup.updateStartup(this.startups, {
        ...startupE,
        location: this.markerLocation,
      });
    } else if (this.longitudeAdd && this.latitudeAdd) {
      this.markerLocation.push(this.latitudeAdd);
      this.markerLocation.push(this.longitudeAdd);
      this.editstartup.updateStartup(this.startups, {
        ...startupE,
        location: this.markerLocation,
      });
    } else if (this.sectorClick) {
      this.editstartup.updateStartup(this.startups, {
        ...startupE,
        sector: this.sectorClick,
      });
    } else {
      this.editstartup.updateStartup(this.startups, { ...startupE });
    }

    this.router.navigate(['admin/']);
  }
}
