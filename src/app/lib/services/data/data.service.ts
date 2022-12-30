import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { startups } from '../../interfaces/startups';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userCollection!: AngularFirestoreCollection<startups>;
  constructor(private firestore: AngularFirestore) {
    this.userCollection = this.firestore.collection('Startups');
 
}
getStartups() {
  return this.userCollection.valueChanges();
}
}
