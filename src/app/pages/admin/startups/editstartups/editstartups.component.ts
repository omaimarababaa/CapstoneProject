import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { startups } from 'src/app/lib/interfaces/startups';
import { DataService } from 'src/app/lib/services/data/data.service';
import { SectorsService } from 'src/app/lib/services/secotrs/sectors.service';
import { LogoService } from 'src/app/lib/services/storge/logo.service';

@Component({
  selector: 'app-editstartups',
  templateUrl: './editstartups.component.html',
  styleUrls: ['./editstartups.component.css'],
})
export class EditstartupsComponent implements OnInit {
  hide:boolean=false;
  public sectors:any;
  sectorClick?:string;
  UrlLogo?:string;
  public startups: any;
  public companyInfo: any;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private editstartup: DataService,
    private fs: AngularFirestore,
    private router: Router,
    private logoSorege:LogoService,
    private getsector:SectorsService
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
    
   
        this.sectors = this.getsector.getSectors().subscribe((response) => {
          this.sectors = response;
        });
      
  }
  upload(event:any){
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      this.logoSorege.uploadLogo(file).subscribe((value) => {
           console.log(value);
        this.UrlLogo = value;
        this.hide=true;

      });
  }
}
getValue(key:any){
  this.sectorClick = key.target.value
  console.log( key.target.value);
  }
  editStartup(startupE: any) {
    console.log(startupE, 'on edit student');
    if(this.UrlLogo && this.sectorClick ){
    
      this.editstartup.updateStartup(this.startups, {...startupE,logo:this.UrlLogo,sector:this.sectorClick});
    }
   else if(this.UrlLogo){
    
    this.editstartup.updateStartup(this.startups, {...startupE,logo:this.UrlLogo});

   }else if(this.sectorClick){
    this.editstartup.updateStartup(this.startups,{...startupE,sector:this.sectorClick});
   
  }else{
    this.editstartup.updateStartup(this.startups,{...startupE});
  }
  
   this.router.navigate(['admin/']);
  }

}
