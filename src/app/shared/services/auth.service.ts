import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

    constructor(public afAuth: AngularFireAuth){
      this.user$ = this.afAuth.authState;
    }


    doRegister(value){
        return new Promise<any>((resolve, reject) => {
          firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
          .then(res => {
            resolve(res);
          }, err => reject(err))
        })
      }

      doLogin(value){
        return new Promise<any>((resolve, reject) => {
          firebase.auth().signInWithEmailAndPassword(value.email, value.password)
          .then(res => {
            resolve(res);
          }, err => reject(err))
        })
      }

      // doRegister(value){
      //   this.afAuth.auth().createUserWithEmailAndPassword(value.email, value.password).then(
      //     res => {
      //       console.log("Signed up!", res);
      //     })
      //     .catch(error => {
      //       console.log("Something went wrong:", error)
      //     });
      // }

      // doLogin(value){
      //   this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password).then(
      //     res => {
      //       console.log("Logged In!", res);
      //     })
      //     .catch(error => {
      //       console.log("Something went wrong:", error)
      //     });
      // }

      signOut() {
        console.log("logged out");
        this.afAuth.auth.signOut();
      }



}
