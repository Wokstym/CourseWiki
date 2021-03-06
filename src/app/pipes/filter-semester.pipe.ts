import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course.model';

@Pipe({
  name: 'filterSemester'
})
export class FilterSemesterPipe implements PipeTransform {

  transform(courses: Course[], textFilter: number): Course[] {
    if (!textFilter) return courses;
    return courses.filter( c => c.semester.toString().includes(textFilter.toString()))
  }
}
