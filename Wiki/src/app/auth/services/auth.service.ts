import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { User } from 'firebase';
import { Observable } from 'rxjs/index';

import { map } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly authState$: Observable<User | null> = this.fireAuth.authState;
 
  users: any;

  constructor(private fireAuth: AngularFireAuth, private usersService: UsersService) {  this.init();}
 

  
  init() {
    this.usersService.getUsers().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(users => {
      this.users = users;
    });
  }


  get user(): User | null {
    return  this.fireAuth.auth.currentUser;
  }
 
  login({email, password}: Credentials) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }
 
  register({email, password}: Credentials) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }
 
  logout() {
    localStorage.removeItem('user');
    return this.fireAuth.auth.signOut();
  }

  isLoggedIn(){
    return this.user != null;
  }

  isAdmin(): boolean {
    let isAdmin = false;
    this.users.forEach(user => {
      if (user.email == this.user.email) {
        isAdmin = true;
        return;
      }
    });

    return isAdmin;
  }

}
