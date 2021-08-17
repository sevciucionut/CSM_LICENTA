import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    // return this.http.get(API_URL + 'all', { responseType: 'text' });
    return of();
  }

  getUserBoard(): Observable<any> {
    // return this.http.get(API_URL + 'user', { responseType: 'text' });
    return of();

  }

  getModeratorBoard(): Observable<any> {
    // return this.http.get(API_URL + 'mod', { responseType: 'text' });
    return of();

  }

  getAdminBoard(): Observable<any> {
    // return this.http.get(API_URL + 'admin', { responseType: 'text' });
    return of();

  }

  getStudents() {
    return this.http.get(`http://localhost:8080/manager/get/students`);
  }

  getManagers() {
    return this.http.get(`http://localhost:8080/manager/get/managers`);
  }

  getTeachers() {
    return this.http.get(`http://localhost:8080/manager/get/instructors`);
  }

  getCourses() {
    return this.http.get(`http://localhost:8080/manager/get/courses`);

  }

  activateStudent(email) {
    return this.http.put(`http://localhost:8080/admin/activate/student/${email}`, {});
  }

  deactivateStudent(email) {
    return this.http.put(`http://localhost:8080/admin/deactivate/student/${email}`, {});
  }

  activateManager(email) {
    return this.http.put(`http://localhost:8080/admin/deactivate/manager/${email}`, {});
  }

  deactivateManager(email) {
    return this.http.put(`http://localhost:8080/admin/deactivate/manager/${email}`, {});
  }

  activateTeacher(email) {
    return this.http.put(`http://localhost:8080/admin/deactivate/teacher/${email}`, {});
  }

  deactivateTeacher(email) {
    return this.http.put(`http://localhost:8080/admin/deactivate/teacher/${email}`, {});
  }

  activateCourse(id) {
    return this.http.put(`http://localhost:8080/admin/deactivate/course/${id}`, {});
  }

  deactivateCourse(id) {
    return this.http.put(`http://localhost:8080/admin/deactivate/course/${id}`, {});

  }

  addTeacher(result: any) {
    return this.http.post(`http://localhost:8080/admin/register/instructor`, result);
  }

  addManager(result: any) {
    return this.http.post(`http://localhost:8080/admin/register/manager`, result);
  }
}
