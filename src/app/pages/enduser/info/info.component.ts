import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { startups } from 'src/app/lib/interfaces/startups';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  // latitude = 30.5852;
  // longitude = 36.2384;
 public latitude!:number;
 public longitude!:number;
  public data: any;
  public companyInfo: any;
  zoom!:number;

  constructor(private route: ActivatedRoute, private fs: AngularFirestore) {
    this.route.params.subscribe((query) => {
      return (this.data = query['id']);
    });
  }
  ngOnInit(): void {
    console.log(this.data);
    this.fs
      .collection<startups>('Startups')
      .doc(this.data)
      .valueChanges()
      .subscribe((response) => {
        if(response)
        this.companyInfo=response;
         console.log( this.companyInfo);
         this.latitude=this.companyInfo.location[0];
         this.longitude=this.companyInfo.location[1];
         this.zoom = 15;
      });
  }
}
