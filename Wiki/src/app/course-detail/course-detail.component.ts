import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from '../course.service'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course: Course;

  

  //@Input() course: Course;

  
  constructor(private route: ActivatedRoute, private courseService: CourseService,private location: Location) { }

  getCourses(): void {
    const id = this.route.snapshot.paramMap.get('id').toString();
    this.courseService.getCourse(id)
    .subscribe(course => this.course=course);
  }

  ngOnInit() {
    this.getCourses();
  }

}
