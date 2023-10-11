import { KeycloakService } from 'keycloak-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user = '';

  constructor(private keyClockService: KeycloakService) { }

  ngOnInit(): void {
    this.initializeUserOptions();
  }
  initializeUserOptions(): void {
    this.user = this.keyClockService.getUsername();
  }
  logout() {
    this.keyClockService.logout('http://localhost:4200');
  }
}
