import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CourseListing} from "../models/course-listing.model";
import {TokenStorageService} from "./token-storage.service";

const API_URL = 'http://localhost:8080/api/student';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) {
  }

  getAllCourses(): Observable<CourseListing> {
    // @ts-ignore
    return this.http.get(API_URL + '/course/all');
  }

  getUserInfo(email): Observable<any> {
    // @ts-ignore
    return this.http.get(API_URL + `/${email}`);
  }

  enroll(id) {
    const user = this.tokenStorageService.getUser();
    return this.http.post(`http://localhost:8080/api/student/${user}/course/${id}/enroll`, null);
  }

  getMyCourses(email) {
    return this.http.get(API_URL + `/courses/${email}`);
  }
}
