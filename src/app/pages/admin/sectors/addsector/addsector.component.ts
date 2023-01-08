import { Component } from '@angular/core';
import { sectors } from 'src/app/lib/interfaces/sectors';
import { SectorsService } from 'src/app/lib/services/secotrs/sectors.service';

@Component({
  selector: 'app-addsector',
  templateUrl: './addsector.component.html',
  styleUrls: ['./addsector.component.css']
})
export class AddsectorComponent {
  sectors: sectors = {
    sectorName: '',
    logo:'',
    city:'',
    designcolor:'',
    ParentCategoryName:''
  }
  sector:sectors[] = [];
  constructor(private sectorAdd:SectorsService){
  }
  submit(){
    //this.student.id = this.id++;
    this.sectorAdd.addSsctor({
      ...this.sectors,
      
    });
    
  }
}
