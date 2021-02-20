import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor() { }
  form: FormGroup = new FormGroup(
    {
      userName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      phoneNumber: new FormControl('', Validators.minLength(10)),
      gender: new FormControl(''),
      password: new FormControl('', Validators.required),
      userType: new FormControl('student')
    }
  )
  initializeFormGroup() {
    this.form.setValue({
      email: '',
      firstName: '',
      gender: '',
      lastName: '',
      password: '',
      phoneNumber: '',
      userName: '',
      userType: 'student',
    })
  }

  studentListInlineEditFormGroup: FormGroup = new FormGroup(
    {
      id: new FormControl(null),
      userName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      phoneNumber: new FormControl('', [Validators.minLength(10), Validators.maxLength(10)]),
      gender: new FormControl(''),
    }
  )
  initializestudentListInlineEditFormGroup() {
    this.form.setValue({
      email: '',
      firstName: '',
      gender: '',
      lastName: '',
      phoneNumber: '',
      userName: '',
      userType: 'student',
    })
  }
  populateForm(student) {
    this.studentListInlineEditFormGroup.setValue(student);
  }

}
