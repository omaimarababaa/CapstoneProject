import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { startups } from 'src/app/lib/interfaces/startups';
import { DataService } from 'src/app/lib/services/data/data.service';
import { SectorsService } from 'src/app/lib/services/secotrs/sectors.service';
import { DeletesectoreComponent } from '../sectors/deletesectore/deletesectore.component';
import { AddsectorComponent } from '../sectors/addsector/addsector.component';
import { AddComponent } from '../startups/add/add.component';
import { DeletestartupsComponent } from '../startups/deletestartups/deletestartups.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit, OnDestroy {
  Allstartups: any;
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
  sectors: any;
  subscription?: Subscription;
  idSector: any;
  nameSec: any;
  lenghtSec?: number;

  constructor(
    private data: DataService,
    public dialog: MatDialog,
    private sector: SectorsService,
    private router: Router
  ) {}
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  ngOnInit(): void {
    this.getAllStartups();
    this.getAllSector();
  }
  getAllStartups() {
    this.data.getStartups().subscribe((response) => {
      this.Allstartups = response;
      this.dataSource = new MatTableDataSource(this.Allstartups);
      this.dataSource.paginator = this.paginator;
    });
  }
  getAllSector() {
    this.sector.getSectors().subscribe((response) => {
      this.sectors = response;
    });
  }
  // Add new startups
  openDialog() {
    const dialogRef = this.dialog.open(AddComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  // Add new sector
  openDialogS() {
    const dialogRef = this.dialog.open(AddsectorComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  // Delete Startup
  deleteStartup(id: string) {
    let dialogRef = this.dialog.open(DeletestartupsComponent, {
      width: '500px',
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
  // deleate Sector
  getIdSec(id: any, name: any) {
    this.idSector = id;
    this.nameSec = name;
  }
  openDialogD() {
    console.log(this.idSector, this.nameSec);
    this.data.getStartupsFilter(this.nameSec).subscribe((response) => {
      this.lenghtSec = response.length;
      if (this.lenghtSec !== 0) {
        alert(
          'You can not delete this sector, it contains ' +
            this.lenghtSec +
            ' startups.'
        );
      } else {
        let dialogRef = this.dialog.open(DeletesectoreComponent, {
          width: '500px',
          data: { id: this.idSector},
        });
        dialogRef.afterClosed().subscribe((result) => {
          console.log(result);
        });
      }
    });
  }

  // update startup
  editStartup(id: string) {
    this.router.navigate(['/edit/' + id]);
  }
  // Filter by sector
  getValue(key: any) {
    let fsector = key.target.value;

    if (fsector == 'AllSector') {
      this.Allstartups = this.data.getStartups().subscribe((response) => {
        this.Allstartups = response;
        this.dataSource = new MatTableDataSource(this.Allstartups);
        this.dataSource.paginator = this.paginator;
      });
    } else {
      this.Allstartups = this.data
        .getStartupsFilter(fsector)
        .subscribe((response) => {
          this.Allstartups = response;
          this.dataSource = new MatTableDataSource(this.Allstartups);
          this.dataSource.paginator = this.paginator;
        });
    }
  }
}
