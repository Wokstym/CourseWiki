import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course.model';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(courses: Course[], textFilter: number): Course[] {
    if (!textFilter) return courses;
    return courses.filter( c => c.name.toLowerCase().includes(textFilter.toString().toLowerCase()))
  }

}
