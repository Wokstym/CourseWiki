import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent {

  credentials = {
    email: '',
    password: '',
  }




  constructor(private router: Router,
    private authService: AuthService, 
    private userService: UsersService) { }



  register() {
    this.authService.register(this.credentials)
      .then(()=> {this.userService.insertUser(this.credentials.email)
      console.log("done");
      })
      .then(() => this.router.navigate(['/courses']))
      .catch(err => console.log(err.message));


  }




}
