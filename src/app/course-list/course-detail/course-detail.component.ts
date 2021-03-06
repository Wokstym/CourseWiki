import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { map } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course: Course;



  constructor(private route: ActivatedRoute, private courseService: CourseService, private location: Location, private userService: UsersService, private authService: AuthService) { }

  getCourses(): void {
    const id = this.route.snapshot.paramMap.get('id').toString();

    this.courseService.getCourses().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(c => {
      this.course = c.find(course => course.id === id);
    });


  }

  joinCourse(): void {
    if (this.course.maxStudents - this.course.numberOfStudents <= 0) return;

    
    if (this.authService.userDb.courses.find(c=> c==this.course.id) != null) {   
      return;
    }
    this.course.numberOfStudents++;
    this.courseService.saveCourse(this.course);
    this.userService.addCourse(this.authService.userDb, this.authService.userDbKey, this.course);

  }

  ngOnInit() {
    this.getCourses();
  }

}
