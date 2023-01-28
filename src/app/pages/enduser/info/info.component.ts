import { query } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { startups } from 'src/app/lib/interfaces/startups';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit,OnDestroy {
  latitude!: number;
  longitude!: number;
  idStartup: any;
  companyInfo: any;
  zoom!: number;
  startup: any;
  subscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore
  ) {
   this.startup= this.route.params.subscribe((query) => {
      return (this.idStartup = query['id']);
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
   }
  ngOnInit(): void {
    this.getInfoStartup();
  }
  getInfoStartup() {
   this.companyInfo= this.firestore
      .collection<startups>('Startups')
      .doc(this.idStartup)
      .valueChanges()
      .subscribe((response) => {
        if (response) this.companyInfo = response;
        this.latitude = this.companyInfo.location[0];
        this.longitude = this.companyInfo.location[1];
        this.zoom = 15;
      });
  }
}
