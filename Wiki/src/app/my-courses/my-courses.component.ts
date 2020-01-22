import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { COURSES } from '../models/mock-courses';

import { map } from 'rxjs/operators';

import { CourseService } from '../services/course.service'
import { ActivatedRoute } from '@angular/router'

import { AuthService } from '../auth/services/auth.service';


@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  courses: Course[];
  
  constructor(private courseService: CourseService, private authService:AuthService) { }

  ngOnInit() {

    
    this.courses = [];

    this.authService.userDb.courses.forEach(id=>{

      this.courseService.getCourses().snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.doc.id, ...c.payload.doc.data() })
          )
        )
      ).subscribe(courses => {
      
        
        this.courses.push(courses.find(c => c.id==id))
        return; 
      });

    })

    
   
  }

 

}
