import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Spruch{
  beschreibung: string
}
@Injectable({
  providedIn: 'root'
})
export class SpruchService {
  private spruchCollection:  AngularFirestoreCollection<Spruch>;
  private  spruche: Observable<Spruch[]>;
  constructor(private afs: AngularFirestore) {
    this.spruchCollection = this.afs.collection<Spruch>('spruche');
    this.spruche = this.spruchCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Spruch;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    )
   }

   getSpruch(){
     this.spruche.subscribe(value => console.log(value));
     return this.spruche
   }
   
}
