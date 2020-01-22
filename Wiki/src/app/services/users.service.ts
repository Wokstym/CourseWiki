import { Injectable } from '@angular/core';
import { LocalUser } from "../models/local-user";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

import { Subscribable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private dbPath = '/users';
  private usersRef: AngularFirestoreCollection<LocalUser> = null;

  constructor(private db: AngularFirestore) {
    this.usersRef = db.collection(this.dbPath);
  }

  insertUser(email): Promise<any> {
    const user: LocalUser = {
      email,
      isAdmin: false,
      courses: []
    };

    return this.usersRef.add(user);
  }


  addCourse(user: LocalUser, key, course): Promise<any> {
    user.courses.push(course.id);

    return this.usersRef.doc(key).update(user);

  }

  

  getUsers(): AngularFirestoreCollection<LocalUser> {
    return this.usersRef;
  }
}
