import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { startups } from 'src/app/lib/interfaces/startups';
import { DataService } from 'src/app/lib/services/data/data.service';
import { AddComponent } from '../add/add.component';
import { DeletestartupsComponent } from '../deletestartups/deletestartups.component';
import { EditstartupsComponent } from '../editstartups/editstartups.component';

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
  constructor(private data: DataService,public dialog: MatDialog) {
   
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddComponent);

    dialogRef.afterClosed().subscribe(result => {
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
      let dialogRef = this.dialog.open(EditstartupsComponent, {
       
        data: {id: id}
      });
      dialogRef.afterClosed().subscribe((result)=> {
          console.log(result); 
  
      })
     }
   
  
  // @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
   
  //  this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
  
    this.data.getStartups().subscribe((response) => {
      this.Allstartups=response;
      this.dataSource = new MatTableDataSource(this.Allstartups);
      
    });
  }
}
