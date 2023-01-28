import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/lib/services/data/data.service';

@Component({
  selector: 'app-deletestartups',
  templateUrl: './deletestartups.component.html',
  styleUrls: ['./deletestartups.component.css']
})
export class DeletestartupsComponent implements OnDestroy{
  subscription?: Subscription;

  constructor(private startups: DataService,private dialogRef: MatDialogRef<DeletestartupsComponent>, @Inject(MAT_DIALOG_DATA) private data: any){}
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
   }
confirm(){
  this.startups.deleteStartups(this.data.id).subscribe((_)=> {
    this.dialogRef.close(true);
  });
}
}