import {Component, OnInit} from '@angular/core';
import {CourseService} from "../_services/course.service";
import {TokenStorageService} from "../_services/token-storage.service";
import {MatDialog} from "@angular/material/dialog";
import {AddPostCoursesComponent} from "../add-post-courses/add-post-courses.component";

@Component({
  selector: 'app-pending-students',
  templateUrl: './pending-students.component.html',
  styleUrls: ['./pending-students.component.css']
})
export class PendingStudentsComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = ['courseName', 'studentName', 'accept', 'decline', 'viewCV'];

  constructor(private courseService: CourseService,
              private tokenStorageService: TokenStorageService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dataSource = this.courseService.getPendingStudents(this.tokenStorageService.getUser());
  }

  goToDetails(row) {

  }

  accept(element) {
    this.courseService.acceptStudent(element.courseId, element.studentEmail).subscribe(() =>
      window.location.reload()
    );
  }

  decline(element) {
    this.courseService.declineStudent(element.courseId, element.studentEmail).subscribe(() =>
      window.location.reload()
    );
  }

  viewCV(element) {

  }
}
