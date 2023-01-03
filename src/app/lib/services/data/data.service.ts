import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { from } from 'rxjs';
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
  return this.startupCollection.valueChanges();
}
addStartups(startup: startups){
  let addedTodo = this.startupCollection.add(startup);
  return from(addedTodo);

}
// getTodos(userId: string): Observable<Todo[]>{

//    return this.fireStore
//    .collection<Todo>
//    ('todos', ref => ref.where('userId', '==', userId)).valueChanges({"idField":'id'}); //server-side filter 
// }

// updateTodo(id: string, todo: Todo){
//    return from(this.todosCollection.doc<Todo>(id).update({...todo}));
// }

// getTodo(id: string){
//   return this.todosCollection.doc<Todo>(id).valueChanges();
// }
}
