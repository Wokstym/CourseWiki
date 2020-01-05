import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course.model';

@Pipe({
  name: 'filterEcts'
})
export class EctsFilterPipe implements PipeTransform {

  transform(courses: Course[], textFilter: number): Course[] {
    if (!textFilter) return courses;
    return courses.filter( c => c.ects.toString().includes(textFilter.toString()))
  }

} 
