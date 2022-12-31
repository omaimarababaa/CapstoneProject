import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public companyInfo: any;

  public constructor(private http: HttpClient) {}

  public ngOnInit(): void {
    const url: string = '../../assets/fullData/companies.json';
    this.http.get(url).subscribe((response) => {
      this.companyInfo = response;
      
    });
  }
  
}
