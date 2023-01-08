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
  public data: any;
  public companyInfo: any;

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
         console.log( this.companyInfo)
       
      });
  }
}
