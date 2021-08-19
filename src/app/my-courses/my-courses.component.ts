import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CourseService} from "../_services/course.service";

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  datdaSource: Observable<any>;
  dataSource: any;
  displayedColumns: string[] = ['id', 'name', 'duration'];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // this.datdaSource = this.courseService.getMyCourses();
  }

  goToDetails(row) {

  }
}
