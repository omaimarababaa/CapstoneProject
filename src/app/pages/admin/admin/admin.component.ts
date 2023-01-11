import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
// import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { startups } from 'src/app/lib/interfaces/startups';
import { DataService } from 'src/app/lib/services/data/data.service';
import { SectorsService } from 'src/app/lib/services/secotrs/sectors.service';
import { AddsectorComponent } from '../sectors/addsector/addsector.component';
import { AddComponent } from '../startups/add/add.component';
import { DeletestartupsComponent } from '../startups/deletestartups/deletestartups.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements AfterViewInit, OnInit {
  public Allstartups: any;
  displayedColumns: string[] = [
    'Logo',
    'Company Name',
    'City',
    'Sector',
    'yearOfEstablishment',
    'Websit',
    'actions'
    
  ];
  dataSource = new MatTableDataSource<startups>();
  public sectors: any;

  constructor(private data: DataService,public dialog: MatDialog,private sector: SectorsService, private router:Router) {
   
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogS(){
    const dialogRef = this.dialog.open(AddsectorComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  deleteStartup(id:string){
      console.log(id);
      let dialogRef = this.dialog.open(DeletestartupsComponent, {
         width: '500px',
         data: {id: id}
       });
       dialogRef.afterClosed().subscribe((result)=> {
           console.log(result); 
       })
   
     }
     editStartup(id:string){
      console.log(id);
      this.router.navigate(['/edit/'+id]);
      // dialogRef.afterClosed().subscribe((result)=> {
      //     console.log(result); 
  
      // })
     }
   
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
   
  //  
  }
  ngOnInit(): void {
  
    this.data.getStartups().subscribe((response) => {
      this.Allstartups=response;
      this.dataSource = new MatTableDataSource(this.Allstartups);
     this.dataSource.paginator = this.paginator;
    });
    this.sectors = this.sector.getSectors().subscribe((response) => {
      this.sectors = response;
    });
   
  }
  getValue(key: any) {
    let fsector = key.target.value;
    console.log(fsector);
    if (fsector == 'AllSector') {
      this.Allstartups = this.data.getStartups().subscribe((response) => {
        this.Allstartups = response;
        this.dataSource = new MatTableDataSource(this.Allstartups);
        console.log(this.Allstartups);
        this.dataSource.paginator = this.paginator;
      });
    } else {
      this.Allstartups = this.data
        .getStartupsFilter(fsector)
        .subscribe((response) => {
          this.Allstartups = response;
          this.dataSource = new MatTableDataSource(this.Allstartups);
          console.log(this.Allstartups);
          this.dataSource.paginator = this.paginator;
        });
    }
  }
 }
  
