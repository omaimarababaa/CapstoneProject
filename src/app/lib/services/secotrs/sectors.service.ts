import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { from } from 'rxjs';
import { sectors } from '../../interfaces/sectors';

@Injectable({
  providedIn: 'root'
})
export class SectorsService {

 sectorsCollection!: AngularFirestoreCollection<sectors>;
  constructor(private firestore: AngularFirestore) {
    this.sectorsCollection = this.firestore.collection('sectors');
 
}
getSectors() {
  return this.sectorsCollection.valueChanges({ idField: 'uid' });
}
addSsctor(sector: sectors){
  let addedTodo = this.sectorsCollection.add(sector);
  return from(addedTodo);

}
deleteSector(id: string) {
  return from(this.sectorsCollection.doc(id).delete());
}
}
