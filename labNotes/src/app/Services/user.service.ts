import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';


@Injectable({
    providedIn: 'root'
  })
  // export class ConnectionServiceService {
    export class UserService {
    constructor(private auth: Auth) {}
    

    userRegister({email, password}: any){
        return createUserWithEmailAndPassword(this.auth, email, password); //esto viaja a Firebase y se queda registrado como usuario
    }

  }