import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CourseService} from "../_services/course.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-post-courses',
  templateUrl: './add-post-courses.component.html',
  styleUrls: ['./add-post-courses.component.css']
})
export class AddPostCoursesComponent implements OnInit {

  post = new FormControl('');
  title: string;

  constructor(public dialogRef: MatDialogRef<AddPostCoursesComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {title: string}) { }

  ngOnInit(): void {
    this.title = this.data.title
  }

  addPost() {
    this.dialogRef.close(this.post.value);
  }
}
