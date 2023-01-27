import { Component, OnInit} from '@angular/core';

import { Router } from '@angular/router';
import { DataService } from 'src/app/lib/services/data/data.service';
import { SectorsService } from 'src/app/lib/services/secotrs/sectors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  text: string = 'Click For More Details';
  // location jordan
  mapLocation = {
    latitude: 31.9539,
    longitude: 35.9106,
  };
  latitude!: number;
  longitude!: number;
  sectors: any;
  companyLogo: any;

  public constructor(
    private startup: DataService,
    private sector: SectorsService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.getAllStartups();
    this.getAllSector();
  }
  getAllStartups() {
    this.startup.getStartups().subscribe((response) => {
      this.companyLogo = response;
    });
  }
  getAllSector() {
    this.sector.getSectors().subscribe((response) => {
      this.sectors = response;
    });
  }
  getValue(key: any) {
    let fsector = key.target.value;
    console.log(fsector);
    if (fsector == 'Filter By sector') {
      this.startup.getStartups().subscribe((response) => {
        this.companyLogo = response;
      });
    } else {
      this.startup.getStartupsFilter(fsector).subscribe((response) => {
        this.companyLogo = response;
      });
    }
  }
  getInfo(id: any) {
    this.router.navigate(['/info/' + id]);
  }
}
