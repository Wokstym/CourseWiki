import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  credentials = {
    email: '',
    password: ''
  }

  error=null;

  constructor(private router: Router,
    private authService: AuthService,
   ) { 
      if(authService.isLoggedIn()) this.router.navigate(['/courses']);
    }

  ngOnInit() {
  }


  login() {
    this.authService.login(this.credentials)
      .then(() => this.router.navigate(['/courses']))
      .catch(err =>  this.error=err.message);

    console.log(this.error);
  }
}
