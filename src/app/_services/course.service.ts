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

  addCourse(id: any, name: any, description: any, image: any, country: any, city: any, address: any, capacity: any, durationStart: any, durationEnd: any, registerPeriodStart: any, registerPeriodEnd: any) {
    const formData: FormData = new FormData();

    const registerDuration = {
     
    }

    formData.append('image', image, image.name);
    formData.append('id', id)
    formData.append('name', name)
    formData.append('description', description)
    formData.append('country', country)
    formData.append('city', city)
    formData.append('address', address)
    formData.append('capacity', capacity)
    formData.append("courseStart",durationStart)
    formData.append("courseEnd",durationEnd)
    formData.append("courseRegisterStart",registerPeriodStart)
    formData.append("courseRegisterEnd",registerPeriodEnd)


    return this.http.post(`http://localhost:8080/instructor/${this.tokenStorageService.getUser()}/add/course`, formData);

  }
}
