import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../_services/token-storage.service';
import {AuthService} from "../_services/auth.service";
import {CourseService} from "../_services/course.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  fileToUpload: File | null = null;
  form: any = {
    fname: null,
    lname: null,
    email: null,
    password: null,
    phone: null,
    university: null,
    year: null,
    cv: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  private user: any;

  constructor(private authService: AuthService,
              private courseService: CourseService,
              private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.courseService.getUserInfo(JSON.parse(sessionStorage.getItem("auth-user"))).subscribe(value => {
      this.user = value;
      this.form.fname = value.fname;
      this.form.lname = value.lname;
      this.form.email = value.email;
      this.form.phone = value.phone;
      this.form.university = value.university;
      this.form.year = value.year;
    });
  }

  onSubmit(): void {
    let {fname, lname, email, password, phone, university, year, cv} = this.form;
    cv = this.fileToUpload;
    this.authService.update(email, cv).subscribe(
      data => {
        this.isSuccessful = true;
      },
      err => {
        this.errorMessage = err.message;
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
