import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fileToUpload: File | null = null;
  form: any = {
    fname: null,
    lname: null,
    email: null,
    password: null,
    phone: null,
    university: null,
    cv: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let { fname, lname, email, password, phone, university, year, cv } = this.form;
    cv = this.fileToUpload;
    this.authService.register(fname, lname, email, password, phone, university, year, cv).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  handleFileInput(event) {
    this.fileToUpload = event.target.files.item(0);
    this.uploadFileToActivity();
  }

  uploadFileToActivity() {
    this.authService.postFile(this.fileToUpload).subscribe(data => {
    }, error => {
      console.log(error);
    });
  }
}
