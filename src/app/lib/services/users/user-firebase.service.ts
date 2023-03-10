import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import { users } from '../../interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class UserFirebaseService {
  userCollection!: AngularFirestoreCollection<users>;
  constructor(private firestore: AngularFirestore) {
    this.userCollection = this.firestore.collection('user');
  }

  getUser() {
    return this.userCollection.valueChanges();
  }
}
