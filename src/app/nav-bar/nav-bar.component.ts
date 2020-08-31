import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  authenticated = false;
  private user: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.user.subscribe((user) => {
      this.authenticated = !!user;
    });
  }

  onLogout() {
    this.authService.logout();
  }
}
