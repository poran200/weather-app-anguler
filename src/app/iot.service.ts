import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class IOTService {
  constructor( private db: AngularFireDatabase) {}
  getdata() {
   return  this.db.list('/sensor').valueChanges();
  }
}
