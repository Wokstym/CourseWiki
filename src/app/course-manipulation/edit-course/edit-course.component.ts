import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service'
import { Course } from '../../models/course.model';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  courses: Course[];
  subscription: Subscription;
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

  remove(id){
    
    this.courseService.deleteCourse(id);
  }

}
