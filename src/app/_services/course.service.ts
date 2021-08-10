import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CourseListing} from "../models/course-listing.model";

const API_URL = 'http://localhost:8080/api/student';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<CourseListing> {
    // @ts-ignore
    return this.http.get(API_URL + '/course/all');
  }

  getUserInfo(email): Observable<any> {
    // @ts-ignore
    return this.http.get(API_URL + `/${email}`);
  }
}
