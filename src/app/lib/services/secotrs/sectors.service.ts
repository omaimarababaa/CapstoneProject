import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { sectors } from '../../interfaces/sectors';

@Injectable({
  providedIn: 'root'
})
export class SectorsService {

  startupCollection!: AngularFirestoreCollection<sectors>;
  constructor(private firestore: AngularFirestore) {
    this.startupCollection = this.firestore.collection('sectors');
 
}
getSectors() {
  return this.startupCollection.valueChanges();
}
// addStartups(startup: sectors){
//   let addedTodo = this.startupCollection.add(startup);
//   return from(addedTodo);

// }
}
