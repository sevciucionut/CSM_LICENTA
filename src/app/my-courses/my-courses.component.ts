import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {CourseService} from "../_services/course.service";
import {TokenStorageService} from "../_services/token-storage.service";
import {MatDialog} from "@angular/material/dialog";
import {AddPostCoursesComponent} from "../add-post-courses/add-post-courses.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = ['id', 'name', 'courseDuration', 'registerDuration', 'active', 'activate',
    'deactivate', 'viewStudents', 'addPost', 'edit', 'addTimetable'];

  constructor(private courseService: CourseService,
              private tokenStorageService: TokenStorageService,
              private dialog: MatDialog,
              private router: Router) {
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
    this.router.navigate(['/viewStudents', element.id])
  }

  addPost(element) {
    const dialogRef = this.dialog.open(AddPostCoursesComponent, {width: '512px', data: {title: 'Add Post'}});

    dialogRef.afterClosed()
      .subscribe(result => {
        this.courseService.addPost(element.id, result).subscribe();
      });
  }

  edit(element) {
    this.router.navigate(['/editCourse', element.id]);
  }

  onFileInput(element, event) {
    this.courseService.addTimetable(element.id, event.target.files[0]).subscribe();
  }
}
