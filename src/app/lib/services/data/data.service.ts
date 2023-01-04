import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { startups } from '../../interfaces/startups';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  startupCollection!: AngularFirestoreCollection<startups>;
  constructor(private firestore: AngularFirestore) {
    this.startupCollection = this.firestore.collection('Startups');
 
}
getStartups() {
  return this.firestore
  .collection<startups>
  ('Startups', ref => ref.where('isApproved', '==', true)).valueChanges({"idField":'uid'});
}
getStartupsRequest() {
  return this.firestore
  .collection<startups>
  ('Startups', ref => ref.where('isApproved', '==', false)).valueChanges({"idField":'uid'});
}
 getStartupsFilter(sectorF: string): Observable<startups[]>{

    return this.firestore
    .collection<startups>
    ('Startups', ref => ref.where('sector', '==', sectorF ).where( 'isApproved', '==', true)).valueChanges(); //server-side filter 
}

addStartups(startup: startups){
  let addedstartup = this.startupCollection.add(startup);
  return from(addedstartup);

}
deleteStartups(id: string){
  return from(this.startupCollection.doc(id).delete());
}
getStartupById(id : string){
  return this.startupCollection.doc(id).valueChanges();
}

updateStartup(id: string, startup: startups){
  return from(this.startupCollection.doc(id).update({...startup}));
}
}
