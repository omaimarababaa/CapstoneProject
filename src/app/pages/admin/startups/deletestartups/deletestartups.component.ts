import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/lib/services/data/data.service';

@Component({
  selector: 'app-deletestartups',
  templateUrl: './deletestartups.component.html',
  styleUrls: ['./deletestartups.component.css']
})
export class DeletestartupsComponent {

  constructor(private startups: DataService,private dialogRef: MatDialogRef<DeletestartupsComponent>, @Inject(MAT_DIALOG_DATA) private data: any){}

confirm(){
  console.log(this.data); 
  //delete student
  this.startups.deleteStartups(this.data.id).subscribe((_)=> {
    this.dialogRef.close(true);
  });
}
}