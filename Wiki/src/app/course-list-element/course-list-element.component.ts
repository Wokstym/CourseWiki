import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../models/course.model';


@Component({
  selector: 'app-course-list-element',
  templateUrl: './course-list-element.component.html',
  styleUrls: ['./course-list-element.component.css']
})


export class CourseListElementComponent implements OnInit {

    labImgUrl:string ='https://images.unsplash.com/photo-1575043635751-f8cf3ffb9471?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80';
    classImgUrl:string ='https://images.unsplash.com/photo-1573166364524-d9dbfd8bbf83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80';
    labCond:string = 'Labolatoria';
  
  @Input() course: Course;

  constructor() { }

  ngOnInit() {
  }

}
