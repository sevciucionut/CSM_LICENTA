import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CourseListing} from "../models/course-listing.model";
import {TokenStorageService} from "./token-storage.service";
import { map, filter, switchMap } from 'rxjs/operators';

const API_URL = 'http://localhost:8080/api/student';
@Injectable({
  providedIn: 'root'
})

export class CourseService {

  viewCV(studentEmail:String):Observable<any> {
    return this.http.get(`http://localhost:8080/instructor/student/${studentEmail}/cv`,{responseType: 'text'})



    // console.log()
    // window.open("data:application/pdf;base64, " + cv);

//    return this.http.get(API_URL + '/course/all');
  }
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

  getMyCoursesTeacher(email) {
    return this.http.get(`http://localhost:8080/instructor/${email}/get/courses`);
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

  activateCourse(id) {
    return this.http.put(`http://localhost:8080/instructor/activate/course/${id}`, {});

  }

  deactivateCourse(id) {
    return this.http.put(`http://localhost:8080/instructor/deactivate/course/${id}`, {});
  }

  addPost(id, result) {
    return this.http.put(`http://localhost:8080/instructor/course/${id}/post`, result);
  }

  getPendingStudents(email) {
    return this.http.get(`http://localhost:8080/instructor/${email}/course/enrolment`);
  }

  acceptStudent(courseId, studentEmail) {
    return this.http.put(`http://localhost:8080/instructor/course/${courseId}/enroll/${studentEmail}`, {});
  }

  declineStudent(courseId, studentEmail) {
    return this.http.delete(`http://localhost:8080/instructor/course/${courseId}/enroll/${studentEmail}`, {});
  }

  editCourse(id: any, name: any, description: any, image: any, country: any, city: any, address: any, capacity: any, durationStart: any, durationEnd: any, registerPeriodStart: any, registerPeriodEnd: any) {
    const formData: FormData = new FormData();

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


    return this.http.put(`http://localhost:8080/instructor/course/${id}/update`, formData);
  }

  getStudents(id) {
    return this.http.get(`http://localhost:8080/instructor/${this.tokenStorageService.getUser()}/get/students/${id}`);

  }

  addNote(id, email, result: any) {
    return this.http.post(`http://localhost:8080/instructor/course/${id}/student/${email}/note`, result);
  }

  addTimetable(id, file) {
    const formData: FormData = new FormData();

    formData.append('timetable', file, file.name);

    return this.http.put(`http://localhost:8080/instructor/course/${id}/timetable`, formData);
  }
}
