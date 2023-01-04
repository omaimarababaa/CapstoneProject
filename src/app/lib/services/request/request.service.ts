import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { startups } from '../../interfaces/startups';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  requestCollection!: AngularFirestoreCollection<startups>;
  constructor(private firestore: AngularFirestore) {
    this.requestCollection = this.firestore.collection('requestAdmin');
 
}
getStartups() {
  return this.requestCollection.valueChanges();
}
 

// deleteStartups(id: string){
//   return from(this.startupCollection.doc(id).delete());
// }
}
