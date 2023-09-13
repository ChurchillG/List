import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';

import { User } from '../today/today.page';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private afs : AngularFirestore,
    private auth: AngularFireAuth
    )
     { }
  
  
    
    addUser(user : User) {
      user.id = this.afs.createId();
      return this.afs.collection('/Users').add(user);
    }

  // get all students
  getAllUser() {
    return this.afs.collection('/newList').snapshotChanges();
  }

  // delete student
  deleteUser(user : User) {
     this.afs.doc('/User/'+user.id).delete();
  }

  // update student
  updateUser(user : User) {
    this.deleteUser(user);
    this.addUser(user);
  }
  getInterviewer() {
    return this.afs.collection('/interview').snapshotChanges();
  }
  // addInterviewer( interviewers: InterviewData) {
  //   interviewers.id = this.afs.createId();
  //   return this.afs.collection('/interview').add(interviewers);
  // }
}