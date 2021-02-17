import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiRequestService } from 'src/app/shared/api-request.service';
import { AdminServiceService } from '../../shared/admin-service.service'
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['../admin.component.css']
})
export class StudentFormComponent implements OnInit {

  constructor(public service: AdminServiceService,
    private apiService: ApiRequestService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<StudentFormComponent>) { }

  ngOnInit(): void {
  }
  genders = ["Male", "Female", "Other"];

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit() {
    //console.log(this.service.form.value);
    this.apiService.registerStudent().subscribe(
      (res: any) => {
        console.log("status of request " + res.status);
        console.log("student added")
        this.toastr.success('New user created!', 'Registration successful.');
        this.onClear();
        this.onClose();
        // if (res.succeeded) {
        //   console.log("status of request " + res.status);
        //   console.log("student added")
        //   this.toastr.success('New user created!', 'Registration successful.');
        //   this.onClear();
        // } else {
        //   this.toastr.error('Registration failed');
        // }
      },
      err => {
        console.log("error msg is " + err.error.message);
        this.toastr.error('Registration failed  ' + err.error.message);

      }
    );
  }
  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}

