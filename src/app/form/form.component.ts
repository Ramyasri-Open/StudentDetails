import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student, StudentsService } from '../service/students.service';
import { ToastrService } from 'ngx-toastr';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  students: any;
  showSpinner = false;

  constructor(
    private formDetail: StudentsService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.formDetail.students().subscribe((data: any) => {
      this.students = data;
    });
  }

  formSubmit = new FormGroup({
    name: new FormControl('', [Validators.required]),
    class: new FormControl('', [Validators.required]),
    division: new FormControl('', [Validators.required]),
    subject1: new FormControl('', [Validators.required]),
    marks1: new FormControl('', [Validators.max(100)]),
    subject2: new FormControl('', [Validators.required]),
    marks2: new FormControl('', [Validators.max(100)]),
    subject3: new FormControl('', [Validators.required]),
    marks3: new FormControl('', [Validators.max(100)]),
  });

  submit() {
    console.log(this.formSubmit.getRawValue());
    //   this.router.navigate(['/spinner']);
    //   // this.showSpinner = true;
    //   // setTimeout(() => {
    //   //   this.showSpinner = false;
    //   //   this.router.navigate(['/dashboard']);
    //   // }, 3000);
    // }

    // onFormSubmit(data: any) {
    //   this.formDetail.saveStudents(data);
  }

  formData(data: any) {
    const params: Student = {
      name: data.name,
      class: data.class,
      division: data.division,
      subjects: [
        { subjectName: data.subject1, marks: data.marks1 },
        { subjectName: data.subject2, marks: data.marks2 },
        { subjectName: data.subject3, marks: data.marks3 },
      ],
    };

    this.formDetail.saveStudents(params).subscribe(() => {
      // console.warn(result);
    });
    // console.log(data);
  }

  // proceedSubmit() {
  //   this.toastr.error('Fill all input fields');
  // }
}
