import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardUserComponent} from './board-user/board-user.component';
import {BoardModeratorComponent} from './board-moderator/board-moderator.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {CourseDetailsComponent} from "./course-details/course-details.component";
import {AddCourseComponent} from "./add-course/add-course.component";
import {MyCoursesComponent} from "./my-courses/my-courses.component";
import {PendingStudentsComponent} from "./pending-students/pending-students.component";
import {EditCourseComponent} from "./edit-course/edit-course.component";
import {ViewStudentsComponent} from "./view-students/view-students.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {
    path: 'user', component: BoardUserComponent
  },
  {path: 'mod', component: BoardModeratorComponent},
  {path: 'admin', component: BoardAdminComponent},
  {path: 'add', component: AddCourseComponent},
  {path: 'myCourses', component: MyCoursesComponent},
  {path: 'pending', component: PendingStudentsComponent},
  {path: 'editCourse/:id', component: EditCourseComponent},
  {path: 'viewStudents/:id', component: ViewStudentsComponent},
  {path: 'details/:id', component: CourseDetailsComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
