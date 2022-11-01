import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service'; // *

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor( 
    private userService: UserService, 
    private router: Router )
    // 
   {}


  changeViewLogin() {
    this.router.navigate(['/login']);  
  }

  ngOnInit(): void {
  }

  LoginWithGoogle() {
     this.userService.loginWithGoogle()
    .then( (response)=> {
       console.log(response)})
       this.router.navigate(['/main'])
    .catch( (error): any => console.log(error, "LoginWithGoogleError!!!"))
  }
}
