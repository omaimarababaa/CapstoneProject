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
// get all startups 
getStartups() {
  return this.firestore
  .collection<startups>
  ('Startups', ref => ref.where('isApproved', '==', true)).valueChanges({"idField":'uid'});
}
// get all startups add by users
getStartupsRequest() {
  return this.firestore
  .collection<startups>
  ('Startups', ref => ref.where('isApproved', '==', false)).valueChanges({"idField":'uid'});
}
// get all startup filter by sectors
 getStartupsFilter(sectorF: string): Observable<startups[]>{

    return this.firestore
    .collection<startups>
    ('Startups', ref => ref.where('sector', '==', sectorF ).where( 'isApproved', '==', true)).valueChanges({"idField":'uid'}); 
}

//  add new startup
addStartups(startup: startups){
  let addedstartup =from(this.startupCollection.add(startup)) ;
  return addedstartup;

}
// delete startups
deleteStartups(id: string){
  return from(this.startupCollection.doc(id).delete());
}
// get startups by Id 
getStartupById(id : string){
  return this.startupCollection.doc(id).valueChanges();
}

//  update startups 
updateStartup(id: string, startup: startups){
  return this.startupCollection.doc(id).update(startup);
}
//  update startup for accept by admin
updateStartupRequest(id: string){
  return from(this.startupCollection.doc(id).update({isApproved:true}));
}
}
