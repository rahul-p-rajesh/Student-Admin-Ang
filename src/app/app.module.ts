import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentFormComponent } from './admin/student-form/student-form.component';
import { AdminServiceService } from './shared/admin-service.service';
import { ApiRequestService } from './shared/api-request.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { StudentListComponent } from './admin/student-list/student-list.component';
import { StudentListEditComponent } from './admin/student-list-edit/student-list-edit.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { StudentComponent } from './student/student.component';
import { StudentEditFormComponent } from './student/student-edit-form/student-edit-form.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    StudentFormComponent,
    StudentListComponent,
    StudentListEditComponent,
    UserComponent,
    LoginComponent,
    StudentComponent,
    StudentEditFormComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [AdminServiceService, ApiRequestService],
  bootstrap: [AppComponent],
  entryComponents: [StudentFormComponent,StudentListEditComponent],
})
export class AppModule { }
