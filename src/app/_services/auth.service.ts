import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
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
    // cv.append('file', formData);
    // console.log(formData);
    // console.log(cv);
    formData.append('cv', file, file.name);
    formData.append('studentRegister', new Blob([JSON.stringify({
        fname,
        lname,
        email,
        password,
        phone,
        university,
        year
      })],
      {
        type: "application/json"
      }));
    return this.http.post('http://localhost:8080/api/student/register', formData, httpOptions);
  }

  postFile(fileToUpload: File): any{
    return of();
  //   const endpoint = 'your-destination-url';
  //   const formData: FormData = new FormData();
  //   formData.append('fileKey', fileToUpload, fileToUpload.name);
  //   return this.http.post(endpoint, formData, {});
  }
}
