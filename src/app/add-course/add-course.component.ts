import {Component, OnInit} from '@angular/core';
import {AuthService} from "../_services/auth.service";
import {CourseService} from "../_services/course.service";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  fileToUpload: File | null = null;
  form: any = {
    id: null,
    name: null,
    description: null,
    image: null,
    country: null,
    city: null,
    address: null,
    capacity: null,
    durationStart: null,
    durationEnd: null,
    registerPeriodStart: null,
    registerPeriodEnd: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private courseService: CourseService, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let {
      id,
      name,
      description,
      image,
      country,
      city,
      address,
      capacity,
      durationStart,
      durationEnd,
      registerPeriodStart,
      registerPeriodEnd,
    } = this.form;
    image = this.fileToUpload;

    console.log(durationStart);

    this.courseService.addCourse(id,
      name,
      description,
      image,
      country,
      city,
      address,
      capacity,
      durationStart,
      durationEnd,
      registerPeriodStart,
      registerPeriodEnd).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
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
