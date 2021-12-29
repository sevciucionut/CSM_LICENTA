import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {CourseService} from "../_services/course.service";
import {TokenStorageService} from "../_services/token-storage.service";

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
  columnsToDisplay = ['id', 'name', 'registerDuration', 'courseDuration', 'capacity', 'country'];
  columnsToDisplayView = ['Id', 'Name', 'Register Period', 'Course Period', 'Capacity', 'Country'];
  expandedElement: PeriodicElement | null;
  role: string;

  constructor(
    private courseService: CourseService,
    private tokenStorageService: TokenStorageService
  ) {
  }

  ngOnInit() {
    this.getData();
    this.role = this.tokenStorageService.getRoles();
  }


  private getData() {
    this.courseService.getAllCourses().subscribe(value => {
      this.dataSource = value;
    });
  }

  enroll(element) {
    this.courseService.enroll(element.id).subscribe();
  }
}

export interface PeriodicElement {
  name: string;
  id: number;
  registerDuration: string;
  courseDuration: string;
  capacity: string;
  description: string;
  country: string;
  imageURL: string;
}
