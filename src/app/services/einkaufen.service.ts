import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
export interface Item{
  beschreibung: string
}
@Injectable({
  providedIn: 'root'
})
export class EinkaufenService {
  private itemCollection: AngularFirestoreCollection<Item>;
  private items: Observable<Item[]>;
  constructor(private afs: AngularFirestore) { 
    this.itemCollection = this.afs.collection<Item>('dinge');
    this.items = this.itemCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    )
  }

  getItems(){
    this.items.subscribe(val => val)
   return this.items;
    
  }
  add(item: Item){
   
    this.afs.collection<Item>('dinge').add(item);
  }
  
  delete(item){
    this.itemCollection.doc(item.id).delete().then(()=> console.log("deleted"))
  }
}
