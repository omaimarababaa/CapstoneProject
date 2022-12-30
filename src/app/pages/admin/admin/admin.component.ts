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
  startups: startups[]=[];
  displayedColumns: string[] = ['Id', 'Logo','Company Name', 'City', 'Sector'];
  dataSource = new MatTableDataSource<startups>;
constructor(private data:DataService){

}
@ViewChild(MatPaginator) paginator!: MatPaginator;

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
}
ngOnInit(): void {
  this.getStudents();
}

getStudents(){
  this.data.getStartups()
  .subscribe((response)=> {
    console.log(response);
    this.startups  = response;
  });
 
}
}


