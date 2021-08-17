import {Component, OnInit} from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {TokenStorageService} from '../_services/token-storage.service';
import {Router} from "@angular/router";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  email: string[] = [];
  data: any;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.email = this.tokenStorage.getUser();
    }
  }

  onSubmit(): void {
    const {username, password} = this.form;

    this.authService.login(username, password)
      .subscribe(
        data => {
          this.data = data;
          this.tokenStorage.saveRoles(data.roles);
          this.tokenStorage.saveUser(data.email);
          this.tokenStorage.saveToken(data.token);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.email = this.tokenStorage.getUser().roles;
          this.router.navigate(['/home']).then(() => window.location.reload());
        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
  }
}
