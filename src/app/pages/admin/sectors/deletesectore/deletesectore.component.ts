import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/lib/services/data/data.service';
import { SectorsService } from 'src/app/lib/services/secotrs/sectors.service';

@Component({
  selector: 'app-deletesectore',
  templateUrl: './deletesectore.component.html',
  styleUrls: ['./deletesectore.component.css'],
})
export class DeletesectoreComponent implements OnDestroy {
  subscription?: Subscription;
  lenghtSec?: number;

  constructor(
    private sector: SectorsService,
    private dialogRef: MatDialogRef<DeletesectoreComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  confirm() {
    this.sector.deleteSector(this.data.id).subscribe((_) => {
      this.dialogRef.close(true);
    });
  }
}
