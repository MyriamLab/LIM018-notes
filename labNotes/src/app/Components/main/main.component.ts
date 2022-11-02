import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service'; 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( 
    private userService: UserService, 
    private router: Router )
   {}

  ngOnInit(): void {
  }

  logOut(){
    this.userService.userLogOut();
    this.router.navigate(['/login'])
  }
}
