import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/lib/services/data/data.service';
import { SectorsService } from 'src/app/lib/services/secotrs/sectors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  public sectors: any;
  public companyLogo: any;

  public constructor(
    private startup: DataService,
    private sector: SectorsService,
    private router:Router
  ) {}

  public ngOnInit(): void {
   
    this.companyLogo = this.startup.getStartups().subscribe((response) => {
      this.companyLogo = response ;
     console.log( this.companyLogo );
    });
    this.sectors = this.sector.getSectors().subscribe((response) => {
      this.sectors = response;
    });
  }
  getValue(key: any) {
    let fsector = key.target.value.toLowerCase( );
    console.log(fsector);
    if (fsector == 'Filter By sector') {
      this.companyLogo = this.startup.getStartups().subscribe((response) => {
        this.companyLogo = response;
        console.log(this.companyLogo);
      });
    } else {
      this.companyLogo = this.startup
        .getStartupsFilter(fsector)
        .subscribe((response) => {
          this.companyLogo = response;
          
          console.log(this.companyLogo);
          console.log(this.companyLogo.id);
        });
    }
  }
  getInfo(id:any){
    console.log(id);
    this.router.navigate(['/info/'+id]);
  }
}
