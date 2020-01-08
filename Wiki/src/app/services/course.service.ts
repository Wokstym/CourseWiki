import { Injectable } from '@angular/core';
import {Course} from '../models/course.model'
import{ COURSES } from '../models/mock-courses';
import {Observable, of } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: Course[];
  coursesChanged = new Subject<Course[]>();

  getCourse(id: string): Observable<Course> {
    return of(this.courses.find(course => course.id === id));
  }

  getCourses(){
    return this.courses;
  }

  addCourseWID(id: string, name: string, ects: number, image: string, description: string, semester: number, courseForm: string, maxStudents: number){
    const course: Course = {
      id: id,
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
    this.coursesChanged.next(this.courses);

  }

  addCourse(name: string, ects: number, image: string, description: string, semester: number, courseForm: string, maxStudents: number) {
    this.addCourseWID((this.courses.length + 1).toString() , name, ects, image, description, semester,courseForm, maxStudents);
  }

  deleteCourse(id: string)
  {
    const courseToDelete =  this.courses.find(course => course.id === id);
    const index = this.courses.indexOf(courseToDelete);
    this.courses.splice(index, 1);
    this.coursesChanged.next(this.courses.slice());
  }

  constructor() {
    this.courses=COURSES;
   }
}
