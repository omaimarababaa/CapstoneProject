import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { last, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogoService {
  constructor(private firestorage: AngularFireStorage) {}

  uploadLogo(file: File) {
    const filePath = `startupsLogo/${file.name}`;
    const storageRef = this.firestorage.ref(filePath);
    return storageRef
      .put(file)
      .snapshotChanges()
      .pipe(
        last(),
        switchMap((val) => {
          return storageRef.getDownloadURL();
        })
      );
      
  }
  // updateLogo(file: File) {
  //   const filePath = `startupsLogo/${file.name}`;
  //   const storageRef = this.firestorage.ref(filePath);
  //   return storageRef
  //     .updateMetadata()
  //     .snapshotChanges()
  //     .pipe(
  //       last(),
  //       switchMap((val) => {
  //         return storageRef.getDownloadURL();
  //       })
  //     );
      
      
      
  // }
}
