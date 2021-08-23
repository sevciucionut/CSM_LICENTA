import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {BoardModeratorComponent} from './board-moderator/board-moderator.component';
import {BoardUserComponent} from './board-user/board-user.component';

import {authInterceptorProviders} from './_helpers/auth.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {CourseDetailsComponent} from "./course-details/course-details.component";
import {NewUserDialogComponent} from "./new-user-dialog/new-user-dialog.component";
import {AddCourseComponent} from "./add-course/add-course.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MyCoursesComponent} from "./my-courses/my-courses.component";
import {AddPostCoursesComponent} from "./add-post-courses/add-post-courses.component";
import {MatInputModule} from '@angular/material/input';
import {PendingStudentsComponent} from "./pending-students/pending-students.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    CourseDetailsComponent,
    NewUserDialogComponent,
    AddCourseComponent,
    MyCoursesComponent,
    AddPostCoursesComponent,
    PendingStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [authInterceptorProviders, MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
