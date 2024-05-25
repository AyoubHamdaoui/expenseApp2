
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  public expenses: any;
  public selectedExpense: any;
  ref = firebase.database().ref('expenses/');

  constructor() {
    this.ref.on('value', resp => {
      this.expenses = [];
      this.expenses = snapshotToArray(resp);
      console.log(this.expenses);
    });
  }

  addExpense(expense:any) {
    expense['user'] = firebase?.auth()?.currentUser?.email;
    return firebase.database().ref('expenses/').push(expense);
  }
}

export const snapshotToArray = (snapshot: any[] | firebase.database.DataSnapshot) => {
  let returnArr: any[] = [];

  snapshot.forEach((childSnapshot: { val: () => any; key: any; }) => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });
  return returnArr;
};