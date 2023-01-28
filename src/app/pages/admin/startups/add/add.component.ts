import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { startups } from 'src/app/lib/interfaces/startups';
import { DataService } from 'src/app/lib/services/data/data.service';
import { SectorsService } from 'src/app/lib/services/secotrs/sectors.service';
import { LogoService } from 'src/app/lib/services/storge/logo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  latitudeAdd: any;
  longitudeAdd: any;

  mapLocation = {
    latitude: 31.9539,
    longitude: 35.9106,
  };

  markerLocation = {
    latitude: 31.9718,
    longitude: 35.8339,
  };
  sectors: any;
  sectorClick?: string;
  UrlLogo?: string;
  massage: any;
  startups: startups = {
    sector: '',
    city: '',
    companyName: '',
    isApproved: true,
    location: ([] = []),
  };
  startup: startups[] = [];
  constructor(
    private startupService: DataService,
    private getsector: SectorsService,
    private dialogRef: MatDialogRef<AddComponent>,
    private logoSorege: LogoService
  ) {}

  ngOnInit(): void {
    this.getAllSectors();
  }

  getAllSectors() {
    this.sectors = this.getsector.getSectors().subscribe((response) => {
      this.sectors = response;
    });
  }

  getValue(key: any) {
    this.sectorClick = key.target.value;
  }
  // Get location by Map
  markerDragEnd($event: any) {
    this.markerLocation.latitude = $event.latLng.lat();
    this.markerLocation.longitude = $event.latLng.lng();

    this.latitudeAdd = $event.latLng.lat();
    this.longitudeAdd = $event.latLng.lng();
  }
  // get latitude by input
  latchang($event: any) {
    this.latitudeAdd = $event.target.value;
  }
  // get longtitude by input
  lngchang($event: any) {
    this.longitudeAdd = $event.target.value;
  }

  submit() {
    this.startups.location?.push(parseFloat(this.latitudeAdd));
    this.startups.location?.push(parseFloat(this.longitudeAdd));

    this.startupService.addStartups({
      ...this.startups,
      logo: this.UrlLogo,
      sector: this.sectorClick,
    });

    alert('Success For Added New Startups');

    this.dialogRef.close(true);
  }
  upload(event: any) {
    const file = (event.target as HTMLInputElement)?.files?.[0];

    if (file) {
      this.logoSorege.uploadLogo(file).subscribe((value) => {
        this.UrlLogo = value;
      });
    }
  }
}
