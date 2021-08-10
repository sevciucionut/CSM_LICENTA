import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email,
      password
    }, httpOptions);
  }

  register(fname: string, lname: string, email: string, password: string, phone: string, university: string, year: string, file: File): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('cv', file, file.name);
    formData.append('fname',fname)
    formData.append('lname',lname)
    formData.append('email',email)
    formData.append('password',password)
    formData.append('phone',phone)
    formData.append('university',university)
    formData.append('year',year)

    return this.http.post('http://localhost:8080/api/student/register', formData);
  }

  postFile(fileToUpload: File): any{
    return of();

  }
}
