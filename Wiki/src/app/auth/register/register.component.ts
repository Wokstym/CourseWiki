import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent  {

  credentials = {
    email: '',
    password: ''
  }
  

  constructor( private router: Router,
    private authService: AuthService) { }

 

  register() {
    this.authService.register(this.credentials)
    .then(() => this.router.navigate(['/login']))
    .catch(err => console.log(err.message));
  }


}
