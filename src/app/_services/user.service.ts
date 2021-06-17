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
}
