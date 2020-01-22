import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
//import { UserService } from 'src/app/my-courses/user.service'
import { map } from 'rxjs/operators';

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

    this.courseService.getCourses().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(c => {
      this.course=c.find(course => course.id === id);
    });

   
  }

  ngOnInit() {
    this.getCourses();
  }

}
