import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.model = {};
  }

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        console.log('Logged in succesfully');
      },
      error => {
        console.log('Failed to login');
      }
    );
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  loggedOut() {
    localStorage.removeItem('token');
    console.log('Logged out');
  }
}