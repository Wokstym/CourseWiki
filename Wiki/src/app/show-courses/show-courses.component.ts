import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { COURSES } from '../mock-courses'

@Component({
  selector: 'app-show-courses',
  templateUrl: './show-courses.component.html',
  styleUrls: ['./show-courses.component.css']
})
export class ShowCoursesComponent implements OnInit {
  courses = COURSES;
  
  constructor() { }

  ngOnInit() {
  }

}
