import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../_services/auth.service";
import {CourseService} from "../_services/course.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  fileToUpload: File | null = null;
  form: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private courseService: CourseService, private authService: AuthService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id;
    this.activatedRoute.paramMap.subscribe(params => {
      id = params.get('id');
    });
    this.form = {
      id: id,
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

    this.courseService.editCourse(id,
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
