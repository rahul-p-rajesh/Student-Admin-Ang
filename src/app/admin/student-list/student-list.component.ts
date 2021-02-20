import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminServiceService } from 'src/app/shared/admin-service.service';
import { ApiRequestService } from 'src/app/shared/api-request.service';
import { ToastrService } from 'ngx-toastr';

import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StudentFormComponent } from '../student-form/student-form.component';
import { StudentListEditComponent } from '../student-list-edit/student-list-edit.component';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['../admin.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(public service: AdminServiceService,
    private apiService: ApiRequestService,
    private dialog: MatDialog,
    private dialog2: MatDialog,
    private toastr: ToastrService,
  ) { }

  listData: MatTableDataSource<any>;

  displayColumns: string[] = ['id', 'firstName', 'lastName',
    'userName', 'email', 'phoneNumber',
    'gender', 'actions',]
  students: string[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: String
  ngOnInit(): void {
    this.refreshList()


  }
  refreshList() {
    this.apiService.getAllStudent()
      .subscribe(
        data => {
          this.students = data as string[];
          console.log(this.students)

          this.listData = new MatTableDataSource(this.students);
          this.listData.sort = this.sort;
          this.listData.paginator = this.paginator;
        }
      );
  }
  ConvertNullToEmpty(value) {
    return (value == null) ? "" : value
  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  OnLogout() {
    this.apiService.logout();
  }
  OnCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(StudentFormComponent, dialogConfig)
    this.refreshList();
  }

  onEdit(row) {
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(StudentListEditComponent, dialogConfig)

  }

  Delete(row) {
    console.log("deleted row has id " + row.id);
    this.apiService.DeleteStudent(row.id).subscribe(
      (res: any) => {
        console.log("student deleted")
        this.toastr.success('Student Deleted');
        this.refreshList();
      },
      err => {
        console.log("error msg is " + err.error.message);
        this.toastr.error('Student could not be deleted  ' + err.error.message);

      }
    );
  }
}

