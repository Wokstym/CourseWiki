import { Injectable } from '@angular/core';
import { Course } from '../models/course.model'
import { COURSES } from '../models/mock-courses';
import { Observable, of } from 'rxjs';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private dbPath = '/courses';
  coursesRef: AngularFirestoreCollection<Course> = null;

  courses: Course[];
  coursesChanged = new Subject<Course[]>();


  constructor(private db: AngularFirestore) {
    this.coursesRef = db.collection(this.dbPath);
    //this.initDb(COURSES); 
    this.getCoursesToLocal();



  }

  getCoursesToLocal() {
    if (this.courses == null) {

      this.coursesRef.snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.doc.id, ...c.payload.doc.data() })
          )
        )
      ).subscribe(c => {
        this.courses = c;
      });
    }
  }

  initDb(courses) {

    courses.forEach(c => {
      this.saveCourse(c)
    });

  }

  saveCourse(course): Promise<any> {
    if (course.key != null) {
      return this.coursesRef.doc(course.key).update(course);
    } else {
      return this.coursesRef.add(course);
    }
  }

  getCourse(id: string): Observable<Course> {
   
    return of(this.courses.find(course => course.id === id));
  }

  getCourses(): AngularFirestoreCollection<Course> {
    return this.coursesRef
  }

  addCourseWID(id: string, name: string, ects: number, image: string, description: string, semester: number, courseForm: string, maxStudents: number) {
    const course: Course = {
      id: id,
      name,
      ects,
      image,
      description,
      semester,
      grade: 0,
      courseForm,
      maxStudents,
      numberOfStudents: 0

    };
    this.saveCourse(course);
    //this.coursesChanged.next(this.courses);

  }

  addCourse(name: string, ects: number, image: string, description: string, semester: number, courseForm: string, maxStudents: number) {
    this.addCourseWID((Number(this.courses[this.courses.length-1].id) + 1).toString(), name, ects, image, description, semester, courseForm, maxStudents);
  }

  // deleteCourse(id: string) {
  //   const courseToDelete = this.courses.find(course => course.id === id);
  //   const index = this.courses.indexOf(courseToDelete);
  //   this.courses.splice(index, 1);
  //   this.coursesChanged.next(this.courses.slice());
  // }

  deleteCourse(id: string): Promise<void> {

    let key: string;
    this.getCourses().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(courses => {
      let course =  courses.find(c => c.id==id)
      key = course.key;
      
   
      return this.coursesRef.doc(courses.find(c => c.id==id).key).delete();
    });
    return null;
  }

 
}
