import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {CourseService} from "../_services/course.service";
import {Observable} from "rxjs";
import {CourseListing} from "../models/course-listing.model";
import {UserService} from "../_services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HomeComponent implements OnInit {

  dataSource;
  columnsToDisplay = ['id', 'name', 'registerPeriod', 'coursePeriod', 'capacity', 'country'];
  expandedElement: PeriodicElement | null;

  constructor(
    private courseService: CourseService
  ) {
  }

  ngOnInit() {
    this.getData();
  }


  private getData() {
    this.courseService.getAllCourses().subscribe(value => {
      this.dataSource = value;
      console.log(value[0].imageURL);
    });
  }

  enroll(element) {
    this.courseService.enroll(element.id).subscribe();
  }
}

export interface PeriodicElement {
  name: string;
  id: number;
  registerPeriod: string;
  coursePeriod: string;
  capacity: string;
  description: string;
  country: string;
  imageURL: string;
}
