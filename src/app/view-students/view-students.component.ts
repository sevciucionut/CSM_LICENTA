import { Component, OnInit } from '@angular/core';
import {CourseService} from "../_services/course.service";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {AddPostCoursesComponent} from "../add-post-courses/add-post-courses.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {

  dataSource: Observable<any>
  displayedColumns = ['fname', 'lname', 'email', 'phone', 'university', 'year', 'addNote'];
  id;

  constructor(private courseService: CourseService, private activatedRoute: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.dataSource = this.courseService.getStudents(this.id);
  }

  addNote(element) {
    const dialogRef = this.dialog.open(AddPostCoursesComponent, {width: '512px', data: {title: 'Add Note'}});

    dialogRef.afterClosed()
      .subscribe(result => {
        this.courseService.addNote(this.id, element.email, result).subscribe();
      });

  }
}
