import { Injectable } from '@angular/core';
import {Course} from './models/course.model'
import{ COURSES } from './mock-courses';
import {Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: Course[];

  getCourse(id: string): Observable<Course> {
    return of(this.courses.find(course => course.id === id));
  }

  getCourses(){
    return this.courses;
  }

  addCourse(name: string, ects: number, image: string, description: string, semester: number, courseForm: string, maxStudents: number) {
    const course: Course = {
      id: (this.courses.length + 1).toString(),
      name,
      ects,
      image,
      description,
      semester,
      grade: 0,
      courseForm,
      maxStudents,

    };
    this.courses.push(course);
  }

  deleteCourse(id: string)
  {
    const courseToDelete =  this.courses.find(course => course.id === id);
    const index = this.courses.indexOf(courseToDelete);
    this.courses.splice(index, 1);
  }

  constructor() {
    this.courses=COURSES;
   }
}
