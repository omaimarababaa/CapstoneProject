import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { startups } from 'src/app/lib/interfaces/startups';
import { DataService } from 'src/app/lib/services/data/data.service';

@Component({
  selector: 'app-editstartups',
  templateUrl: './editstartups.component.html',
  styleUrls: ['./editstartups.component.css'],
})
export class EditstartupsComponent implements OnInit {
  public startups: any;
  public companyInfo: any;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private editstartup: DataService,
    private fs: AngularFirestore,
    private router: Router
  ) {
    this.route.params.subscribe((data) => {
      return (this.startups = data['id']);
    });
  }
  ngOnInit(): void {
    this.fs
      .collection<startups>('Startups')
      .doc(this.startups)
      .valueChanges()
      .subscribe((response) => {
        if (response) this.companyInfo = response;
        console.log(this.companyInfo);
      });
  }

  editStartup(startupE: any) {
    console.log(startupE, 'on edit student');
    this.editstartup.updateStartup(this.startups, startupE);
    this.router.navigate(['admin/']);
  }
}
