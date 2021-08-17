import {Component, OnInit} from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  user: string
  showStudent: boolean;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.user = this.tokenStorageService.getUser();

      // @ts-ignore
      this.showAdminBoard = this.tokenStorageService.getRoles().includes('ROLE_ADMIN');

      this.showStudent = this.tokenStorageService.getRoles().includes('ROLE_STUDENT');
      // @ts-ignore
      this.showModeratorBoard = this.tokenStorageService.getRoles().includes('ROLE_MODERATOR');
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
