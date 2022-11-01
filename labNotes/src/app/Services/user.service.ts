import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider} from '@angular/fire/auth';


@Injectable({
    providedIn: 'root'
  })
  // export class ConnectionServiceService {
    export class UserService {
    constructor(private auth: Auth) {}
  
//método para registar el usuario
    userSignUp({email, password}: any){
      console.log("aquí!", email, password)
        return createUserWithEmailAndPassword(this.auth, email, password); //esto viaja a Firebase y se queda registrado como usuario
    }
//método para logear el usuario
    userLogin({email, password}: any){
      console.log("aquí Login!", email, password)
      return signInWithEmailAndPassword(this.auth, email, password);
    }

    userLoginWithGoogle() {
  
    }
  
    logout() {
      this.auth.signOut();
    }
  }