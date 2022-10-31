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
  
  signUpForm  = new FormGroup ({
  Name: new FormControl(''),
  Email:  new FormControl(''),
  Password: new FormControl('')
});
 
  // aquí inyectamos el servicio UserService
  constructor( 
    private userService: UserService, 
    private router: Router, 
    private render: Renderer2) {}

  ngOnInit(): void {
  } 

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.signUpForm.value); //recibo todos los valores de los campos del form
    this.userService.userSingUp(this.signUpForm.value)
    .then( (response)=> {
       console.log(response)})
       this.router.navigate(['/login'])
    .catch( (error): any => console.log(error, "error!!!"))

  }
}
