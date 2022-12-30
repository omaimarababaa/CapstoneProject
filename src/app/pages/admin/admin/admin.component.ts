import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { startups } from 'src/app/lib/interfaces/startups';
import { DataService } from 'src/app/lib/services/data/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements AfterViewInit, OnInit {
  public Allstartups: any;
  displayedColumns: string[] = ['Id', 'Logo', 'Company Name', 'City', 'Sector' , 'Websit'];
  dataSource = new MatTableDataSource<startups>();
  constructor(private data: DataService) {}
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.data.getStartups().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.Allstartups = response;
    });
  }
  ngOnInit(): void {
    this.data.getStartups().subscribe((response) => {
      this.Allstartups = response;
    });
  }
}
