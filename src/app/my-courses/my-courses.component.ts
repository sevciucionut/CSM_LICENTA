import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {CourseService} from "../_services/course.service";
import {TokenStorageService} from "../_services/token-storage.service";
import {MatDialog} from "@angular/material/dialog";
import {AddPostCoursesComponent} from "../add-post-courses/add-post-courses.component";

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = ['id', 'name', 'courseDuration', 'registerDuration', 'active', 'activate', 'deactivate', 'viewStudents', 'addPost', 'edit'];

  constructor(private courseService: CourseService,
              private tokenStorageService: TokenStorageService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dataSource = this.courseService.getMyCoursesTeacher(this.tokenStorageService.getUser());
  }

  goToDetails(row) {

  }

  activateCourse(element) {
    this.courseService.activateCourse(element.id).subscribe(() =>
      window.location.reload()
    );
  }

  deactivateStudent(element) {
    this.courseService.deactivateCourse(element.id).subscribe(() => window.location.reload()
    );
  }

  viewStudents(element) {

  }

  addPost(element) {
    const dialogRef = this.dialog.open(AddPostCoursesComponent, {width: '512px'});

    dialogRef.afterClosed()
      .subscribe(result => {
      this.courseService.addPost(element.id, result).subscribe();
    });
  }
}
