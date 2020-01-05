import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../course.service'
import { Course } from '../../models/course.model';
import { Subscription } from 'rxjs';

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
    this.subscription = this.courseService.coursesChanged.subscribe(courses => {
      this.courses = courses;
    });
    this.courses = this.courseService.getCourses();
  }

  remove(id){
    this.courseService.deleteCourse(id);
  }

}
