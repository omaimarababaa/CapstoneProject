import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { startups } from 'src/app/lib/interfaces/startups';
import { DataService } from 'src/app/lib/services/data/data.service';
import { DeletestartupsComponent } from '../startups/deletestartups/deletestartups.component';
import { EditstartupsComponent } from '../startups/editstartups/editstartups.component';

@Component({
  selector: 'app-requst-admin',
  templateUrl: './requst-admin.component.html',
  styleUrls: ['./requst-admin.component.css']
})
export class RequstAdminComponent implements AfterViewInit, OnInit {
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
     
     acceptStartup(id:string){
            this.data.updateStartupRequest(id);
     }
   
  
  // @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
   
  //  this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
  
    this.data.getStartupsRequest().subscribe((response) => {
      this.Allstartups=response;
      this.dataSource = new MatTableDataSource(this.Allstartups);
      
    });
  }
}


