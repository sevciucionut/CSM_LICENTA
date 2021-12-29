import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new-user-dialog',
  templateUrl: './new-user-dialog.component.html',
  styleUrls: ['./new-user-dialog.component.css']
})
export class NewUserDialogComponent implements OnInit {
  form: any = {
    fname: null,
    lname: null,
    email: null,
    password: null,
    phone: null,
    title: null,
    type: this.data.type,
  };


  ngOnInit(): void {
  }

  constructor(
    public dialogRef: MatDialogRef<NewUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onSubmit() {
    this.dialogRef.close(this.form);
  }
}

export interface DialogData {
  type: string;
}
