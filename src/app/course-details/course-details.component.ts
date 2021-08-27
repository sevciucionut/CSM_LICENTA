import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../_services/course.service";
import {TokenStorageService} from "../_services/token-storage.service";

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: any;
  notes: any[];

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService, private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    let id;
    this.activatedRoute.paramMap.subscribe(params => {
      id = params.get('id');
    });
    this.courseService.getCourseDetails(id).subscribe(v => this.course = v);
    this.courseService.getNotes(id, this.tokenStorageService.getUser()).subscribe(v => this.notes = v);
  }

  viewTimetable(timetable) {
    var byteCharacters = atob(timetable);
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    var file = new Blob([byteArray], {type: 'application/pdf;base64'});
    var fileURL = URL.createObjectURL(file);
    window.open(fileURL);

  }
}
