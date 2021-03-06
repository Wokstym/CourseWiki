import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
import { COURSES } from '../../models/mock-courses';

import { map } from 'rxjs/operators';

import { CourseService } from '../../services/course.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-show-courses',
  templateUrl: './show-courses.component.html',
  styleUrls: ['./show-courses.component.css']
})
export class ShowCoursesComponent implements OnInit {
  courses: Course[];
  
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourses().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(courses => {
      this.courses = courses;
    });
   
  }

 
  

}
