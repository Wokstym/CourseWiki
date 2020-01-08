import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
//import { UserService } from 'src/app/my-courses/user.service'

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course: Course;

  

  //@Input() course: Course;

  
  constructor(private route: ActivatedRoute, private courseService: CourseService,private location: Location,  /*private userService: UserService*/) { }

  getCourses(): void {
    const id = this.route.snapshot.paramMap.get('id').toString();
    this.courseService.getCourse(id)
    .subscribe(course => this.course=course);
  }
  // joinCourse() {
  //   if (!this.userService.courseService.canJoin(this.course.id)) { window.alert('Niestety nie ma już miejsc na ten kurs'); } else { this.userService.joinCourse(this.course.id); }
  // }

  ngOnInit() {
    this.getCourses();
  }

}
