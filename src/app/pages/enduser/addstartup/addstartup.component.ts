import { Component } from '@angular/core';
import { startups } from 'src/app/lib/interfaces/startups';
import { DataService } from 'src/app/lib/services/data/data.service';
import { SectorsService } from 'src/app/lib/services/secotrs/sectors.service';
import { LogoService } from 'src/app/lib/services/storge/logo.service';

@Component({
  selector: 'app-addstartup',
  templateUrl: './addstartup.component.html',
  styleUrls: ['./addstartup.component.css'],
})
export class AddstartupComponent {
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
  startups: startups = {
    sector: '',
    city: '',
    companyName: '',
    isApproved: false,
    location: ([] = []),
  };
  startup: startups[] = [];

  constructor(
    private startupService: DataService,
    private logoStorege: LogoService,
    private getsector: SectorsService
  ) {}
  public ngOnInit(): void {
    this.getAllSector();
  }

  getAllSector() {
    this.sectors = this.getsector.getSectors().subscribe((response) => {
      this.sectors = response;
    });
  }
  // get latitude & longitude from Map
  markerDragEnd($event: any) {
    this.markerLocation.latitude = $event.latLng.lat();
    this.markerLocation.longitude = $event.latLng.lng();

    this.latitudeAdd = $event.latLng.lat();
    this.longitudeAdd = $event.latLng.lng();
  }
  // Get latitude from input
  latchang($event: any) {
    this.latitudeAdd = $event.target.value;
  }
  // Get longitude from input
  lngchang($event: any) {
    this.longitudeAdd = $event.target.value;
  }
  // Get sector value by selest option
  getValue(key: any) {
    this.sectorClick = key.target.value;
  }

  submit() {
    this.startups.location?.push(parseFloat(this.latitudeAdd));
    this.startups.location?.push(parseFloat(this.longitudeAdd));

    this.startupService
      .addStartups({
        ...this.startups,
        logo: this.UrlLogo,
        sector: this.sectorClick,
      })
      .subscribe(() => {
        alert('Thanks For Added, Please wait the admin approval');
        window.location.reload();
      });
  }

  upload(event: any) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      this.logoStorege.uploadLogo(file).subscribe((value) => {
        this.UrlLogo = value;
      });
    }
  }
}
