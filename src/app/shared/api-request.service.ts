import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { AdminServiceService } from './admin-service.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private adminService: AdminServiceService, private http: HttpClient) { }
  readonly BaseURI = 'http://localhost:5000/api/';

  registerStudent() {
    var body = {
      "email": this.adminService.form.value.email,
      "firstName": this.adminService.form.value.firstName,
      "gender": this.adminService.form.value.gender,
      "lastName": this.adminService.form.value.lastName,
      "password": this.adminService.form.value.firstName,
      "phoneNumber": this.adminService.form.value.phoneNumber,
      "userName": this.adminService.form.value.userName,
      "userType": 'student',
    };
    return this.http.post(this.BaseURI + 'admin/', body);
  }


  getAllStudent() {
    return this.http.get(this.BaseURI + 'admin/');

  }

  EditStudent() {
    var body = {
      "id": this.adminService.studentListInlineEditFormGroup.value.id,
      "userName": this.adminService.studentListInlineEditFormGroup.value.userName,
      "firstName": this.adminService.studentListInlineEditFormGroup.value.firstName,
      "lastName": this.adminService.studentListInlineEditFormGroup.value.lastName,
      "email": this.adminService.studentListInlineEditFormGroup.value.email,
      "phoneNumber": this.adminService.studentListInlineEditFormGroup.value.phoneNumber,
      "gender": this.adminService.studentListInlineEditFormGroup.value.gender,
    }
    return this.http.put(this.BaseURI + 'admin/' + body.id, body);
  }

  DeleteStudent(id) {
    return this.http.delete(this.BaseURI + 'admin/' + id)
  }

}
