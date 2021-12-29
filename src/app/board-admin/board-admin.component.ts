import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {MatDialog} from "@angular/material/dialog";
import {NewUserDialogComponent} from "../new-user-dialog/new-user-dialog.component";
import {filter, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;
  displayedColumns = ['fname', 'lname', 'email', 'activate', 'deactivate'];
  displayedColumnsCourses = ['id', 'name', 'capacity', 'activate', 'deactivate'];
  dataSourceStudent: any;
  dataSourceManager: any;
  dataSourceTeacher: any;
  dataSourceCourse: any;

  constructor(private userService: UserService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.getAll();
  }

  private getAll() {
    this.userService.getStudents().subscribe(value => this.dataSourceStudent = value);
    this.userService.getManagers().subscribe(value => this.dataSourceManager = value);
    this.userService.getTeachers().subscribe(value => this.dataSourceTeacher = value);
    this.userService.getCourses().subscribe(value => this.dataSourceCourse = value);
  }

  activateStudent(element) {
    this.userService.activateStudent(element.email).subscribe();
  }

  deactivateStudent(element) {
    this.userService.deactivateStudent(element.email).subscribe();
  }

  activateManager(element) {
    this.userService.activateManager(element.email).subscribe();
  }

  deactivateManager(element) {
    this.userService.deactivateManager(element.email).subscribe();
  }

  activateTeacher(element) {
    this.userService.activateTeacher(element.email).subscribe();
  }

  deactivateTeacher(element) {
    this.userService.deactivateTeacher(element.email).subscribe();
  }

  activateCourse(element) {
    this.userService.activateCourse(element.id).subscribe();
  }

  deactivateCourse(element) {
    this.userService.deactivateCourse(element.id).subscribe();
  }

  addNewManager() {
    const dialogRef = this.dialog.open(NewUserDialogComponent, {
      width: '512px',
      data: {type: 'manager'}
    });

    dialogRef.afterClosed()
      .pipe(
        switchMap( result => this.userService.addManager(result))
      )
      .subscribe(() => {
        this.getAll()
    });
  }

  addNewTeacher() {
    const dialogRef = this.dialog.open(NewUserDialogComponent, {
      width: '512px',
      data: {type: 'teacher'}
    });

    dialogRef.afterClosed().pipe(
      switchMap(result => this.userService.addTeacher(result))
    )
      .subscribe(() => {
        this.getAll()
      });
  }
}
