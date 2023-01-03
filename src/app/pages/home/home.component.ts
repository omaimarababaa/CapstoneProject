import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { throttleTime } from 'rxjs';
import { DataService } from 'src/app/lib/services/data/data.service';
import { SectorsService } from 'src/app/lib/services/secotrs/sectors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public sectors: any;
public companyLogo:any;
  public constructor(private http: HttpClient,private startup:DataService,private sector:SectorsService) {}

  public ngOnInit(): void {

   this.companyLogo=this.startup.getStartups().subscribe((response) => {
    this.companyLogo = response;
  });
  this.sectors=this.sector.getSectors().subscribe((response) => {
    this.sectors = response;
  });

  }
  
}
