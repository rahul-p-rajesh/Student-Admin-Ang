import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {
    path: '', redirectTo: "/user/login", pathMatch: 'full'
  },
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },
  {
    path: 'student',component:StudentComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
