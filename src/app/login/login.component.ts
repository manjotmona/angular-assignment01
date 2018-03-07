import {Component, OnInit} from '@angular/core';
import {Login} from './login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Login = new Login('', '');

  constructor(private router: Router) {
  }

  ngOnInit() {
  }


  submitUser(route: string) {
    this.router.navigate([route]);

  }

}

