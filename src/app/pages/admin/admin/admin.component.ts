import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { startups } from 'src/app/lib/interfaces/startups';
import { DataService } from 'src/app/lib/services/data/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements AfterViewInit,OnInit   {
 public Allstartups:any;
  displayedColumns: string[] = ['Id', 'Logo','Company Name', 'City', 'Sector'];
  dataSource = new MatTableDataSource<any>;
constructor(private data:DataService){
}
@ViewChild(MatPaginator) paginator!: MatPaginator;

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.data.getStartups().subscribe((response=>{
    this.dataSource = new MatTableDataSource(response)
    
  }
    ));

}
ngOnInit(): void {
 this.Allstartups=this.data.getStartups().subscribe((response) => {
  this.Allstartups = response
  console.log(this.Allstartups);
 });
}

// const  Arraystartups ={
//   companyName:,
//   logo?: ,
//   sector: ,
//   city: ,
//   founder?: ,
//   numOfEmployees?:76,
//   yearOfEstablishment?: 8,
//   website?: ,
//   email?: ,
//   phone?: ,
//   location?:,
// }

 
}



