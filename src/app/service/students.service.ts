import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  url = 'http://localhost:3000/students';
  constructor(private http: HttpClient) {}
  students() {
    return this.http.get(this.url);
  }
  saveStudents(data: Student) {
    // console.log(data);
    return this.http.post(this.url, data);
  }
}
export interface Student {
  name: string;
  class: number | string;
  division: number | string;
  subjects: Subject[];
}

export interface Subject {
  subjectName?: string;
  marks?: number | string;
}
