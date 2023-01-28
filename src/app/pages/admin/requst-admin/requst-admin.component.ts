import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { startups } from 'src/app/lib/interfaces/startups';
import { DataService } from 'src/app/lib/services/data/data.service';
import { DeletestartupsComponent } from '../startups/deletestartups/deletestartups.component';


@Component({
  selector: 'app-requst-admin',
  templateUrl: './requst-admin.component.html',
  styleUrls: ['./requst-admin.component.css'],
})
export class RequstAdminComponent implements OnInit,OnDestroy {
  public Allstartups: any;
  displayedColumns: string[] = [
    'Logo',
    'Company Name',
    'City',
    'Sector',
    'yearOfEstablishment',
    'numOfEmployees',
    'Websit',
    'email',
    'founder',
    'actions',
  ];
  dataSource = new MatTableDataSource<startups>();
  subscription?: Subscription;
  constructor(private data: DataService, public dialog: MatDialog) {}
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
   }
  ngOnInit(): void {
    this.getAllStartups();
  }
 
// Get All startups add by user
  getAllStartups() {
    this.data.getStartupsRequest().subscribe((response) => {
      this.Allstartups = response;
      this.dataSource = new MatTableDataSource(this.Allstartups);
    });
  }
  // Delete startups add by user
  deleteStartup(id: string) {
    console.log(id);
    let dialogRef = this.dialog.open(DeletestartupsComponent, {
      width: '500px',
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  // Aproved startups add by user
  acceptStartup(id: string) {
    this.data.updateStartupRequest(id);
  }
}
