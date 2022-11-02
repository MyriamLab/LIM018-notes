import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private userService: UserService,
    private router: Router,
    private render: Renderer2
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.loginForm.value); //recibo todos los valores de los campos del form
    this.userService
      .userLogin(this.loginForm.value)
      .then((response) => {
        console.log(response);
        this.router.navigate(['/main']);
      })
      .catch((error): any => console.log(error, 'errorLogin!!!'));
  }
}
