import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course.model';

@Pipe({
  name: 'filterGrade'
})
export class FilterGradePipe implements PipeTransform {

  transform(courses: Course[], textFilter: number): Course[] {
    if (!textFilter) return courses;
    return courses.filter( c => c.grade.toString().includes(textFilter.toString()))
  }

}
