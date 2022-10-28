import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  idRegisterName = new FormControl('');
  idRegisterEmail = new FormControl('');
  idRegisterPassword = new FormControl('');
  
  // formReg: FormGroup;

  // aquí inyectamos el servicio UserService
  constructor( private userService: UserService, private route: Router, private render: Renderer2) { 
    // this.formReg = new FormGroup({
    //   idRegisterName: new FormControl(),
    //   email: new FormControl(),
    //   password: new FormControl()
    // }) 
  }

  ngOnInit(): void {
    
  } 

  register(event: any ) {
    event.preventDefault()
    // console.log(this.formReg.value, "soy formReg!!")
    console.log(this.idRegisterName, "soy nome!!")
    console.log(this.idRegisterEmail, "soy email!!")
    console.log(this.idRegisterPassword, "soy password!!")
    

    
    // //formReg declarado en la línea 16. Trae a email y password 
    // this.userService.userRegister(this.formReg.value)
    // .then( (resp)=> { console.log(resp)})
    // .catch( (error): any => console.log(error, "error!!!"))
  }

}
