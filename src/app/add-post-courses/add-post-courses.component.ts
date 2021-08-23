import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CourseService} from "../_services/course.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-post-courses',
  templateUrl: './add-post-courses.component.html',
  styleUrls: ['./add-post-courses.component.css']
})
export class AddPostCoursesComponent implements OnInit {

  post = new FormControl('');

  constructor(public dialogRef: MatDialogRef<AddPostCoursesComponent>,) { }

  ngOnInit(): void {
  }

  addPost() {
    this.dialogRef.close(this.post.value);
  }
}
