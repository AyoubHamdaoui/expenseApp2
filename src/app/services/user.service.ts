// src/app/services/user.service.ts
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public signedIn = false;

  constructor( private router: Router ) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('User is logged in');
        this.router.navigateByUrl('/list');
      } else {
        console.log('User is not logged in');
        this.router.navigateByUrl('/login');
      }
    });
  }

  signup(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  signin(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signout() {
    return firebase.auth().signOut();
  }

  currentUser() {
    return firebase.auth().currentUser;
  }
}