import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CourseService} from "../_services/course.service";
import {TokenStorageService} from "../_services/token-storage.service";

export interface PeriodicElement {
  name: string;
  id: string;
  duration: string;
}



@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'duration'];
  dataSource;

  constructor(private router: Router, private courseService: CourseService, private tokenStorageService: TokenStorageService) {
  }

  ngOnInit() {
    this.courseService.getMyCourses(this.tokenStorageService.getUser()).subscribe(value => this.dataSource = value)
  }

  goToDetails(element) {
    this.router.navigate(['/details', element.id]);
  }
}
