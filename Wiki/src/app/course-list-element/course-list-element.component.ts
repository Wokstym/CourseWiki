import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../models/course.model';


@Component({
  selector: 'app-course-list-element',
  templateUrl: './course-list-element.component.html',
  styleUrls: ['./course-list-element.component.css']
})


export class CourseListElementComponent implements OnInit {

  
  @Input() course: Course;

  constructor() { }

  ngOnInit() {
  }

}
