import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { startups } from 'src/app/lib/interfaces/startups';
import { DataService } from 'src/app/lib/services/data/data.service';

@Component({
  selector: 'app-editstartups',
  templateUrl: './editstartups.component.html',
  styleUrls: ['./editstartups.component.css']
})
export class EditstartupsComponent {
  // startup?: startups;
  // startups$!: Observable<startups | undefined>;
  // id!: string;
  // constructor(private route: ActivatedRoute, 
  //   private editstartup: DataService,
  //   private router: Router){

  //   this.startups$ = this.route.paramMap.pipe(
  //     switchMap((value)=> {
  //       this.id = value.get('id')+'';
  //       return this.editstartup.getStartupById(this.id)
      
  //     }

  //     )
  //   )
    
  // }
  // editStartup(student: any){
  //   console.log(student,'on edit student');
  //   this.editstartup.updateStartup(this.id, student);
  //   this.router.navigate(['Admin/']);
  // }

}

