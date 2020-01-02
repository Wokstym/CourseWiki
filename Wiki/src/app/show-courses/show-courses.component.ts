import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { COURSES } from '../mock-courses';


import { CourseService } from '../course.service'
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
    this.courses = this.courseService.getCourses();
  }


}
