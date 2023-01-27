import { Component } from '@angular/core';
import { SectorsService } from 'src/app/lib/services/secotrs/sectors.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  sectors: any;
  public constructor( private sector: SectorsService) {}

  public ngOnInit(): void {

    this.getAllSector();
  }
  getAllSector() {
    this.sector.getSectors().subscribe((response) => {
      this.sectors = response;
    });
  }
}
