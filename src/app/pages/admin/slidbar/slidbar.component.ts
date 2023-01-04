import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../startups/add/add.component';

@Component({
  selector: 'app-slidbar',
  templateUrl: './slidbar.component.html',
  styleUrls: ['./slidbar.component.css']
})
export class SlidbarComponent {
  constructor(public dialog: MatDialog){}
  openDialog() {
    const dialogRef = this.dialog.open(AddComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
