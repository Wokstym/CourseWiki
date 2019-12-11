import { Injectable } from '@angular/core';
import {Course} from './models/course.model'
import{ COURSES } from './mock-courses';
import {Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  getCourse(id: string): Observable<Course> {
    return of(COURSES.find(course => course.id === id));
  }

  constructor() { }
}
