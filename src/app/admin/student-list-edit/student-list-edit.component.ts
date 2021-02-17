import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AdminServiceService } from 'src/app/shared/admin-service.service';
import { ApiRequestService } from 'src/app/shared/api-request.service';

@Component({
  selector: 'app-student-list-edit',
  templateUrl: './student-list-edit.component.html',
  styleUrls: ['../admin.component.css']
})
export class StudentListEditComponent implements OnInit {

  constructor(public service: AdminServiceService,
    private apiService: ApiRequestService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<StudentListEditComponent>) { }

  ngOnInit(): void {
  }
  genders = ["Male", "Female", "Other"];

  onClear() {
    this.service.studentListInlineEditFormGroup.reset();
    this.service.initializestudentListInlineEditFormGroup();
  }
  onSubmit() {
    this.apiService.EditStudent().subscribe(
      (res: any) => {
        console.log("edit done")
        this.toastr.success('Student edited');
        this.onClear();
        this.onClose();
      },
      err => {
        console.log("Student Edit Fail");
        this.toastr.error('Student Edit Fail');

      }
    );
  }
  onClose() {
    this.service.studentListInlineEditFormGroup.reset();
    this.service.initializestudentListInlineEditFormGroup();
    this.dialogRef.close();
  }
}
