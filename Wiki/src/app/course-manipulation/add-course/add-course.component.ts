import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../models/course.model';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CourseService } from '../../course.service'
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  submitted = false;
  empty = "empty";
  selected = "Labolatoria";

  courseForms = ['Ćwiczenia', 'Labolatoria']
  courseForm: FormGroup;
  isEditing: boolean;
  currCourse: Course;
  buttonText = "Dodaj kurs";


  private initForm() {

    let name: string;
    let ects: number;
    let image: string;
    let description: string;
    let semester: number;
    let courseForm: string;
    let maxStudents: number;

    if (this.isEditing) {
      name = this.currCourse.name;
      ects = this.currCourse.ects
      image = this.currCourse.image
      description = this.currCourse.description
      semester = this.currCourse.semester
      courseForm = this.currCourse.courseForm
      maxStudents = this.currCourse.maxStudents
    }

    this.courseForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      ects: new FormControl(ects, Validators.required),
      image: new FormControl(image, Validators.required),
      description: new FormControl(description, Validators.required),
      semester: new FormControl(semester, Validators.required),
      courseForm: new FormControl(courseForm, Validators.required),
      maxStudents: new FormControl(maxStudents, Validators.required),
    });
  }

  constructor(private courseService: CourseService, private route: Router, private _routeParams: ActivatedRoute) {

  }
  getCourses(): void {
    this._routeParams.queryParams
      .subscribe(params => {
        this.isEditing=params.isEditing == "true";
      });
    if (this.isEditing) {
      this.buttonText = "Edytuj kurs"
      const id = this._routeParams.snapshot.paramMap.get('id').toString();
      this.courseService.getCourse(id).subscribe(course => this.currCourse = course);
      this.selected = this.currCourse.courseForm;
    }
  }


  onSubmit() {
    if (this.isEditing && this.currCourse != null) {
      this.courseService.deleteCourse(this.currCourse.id);
    }
    const name: string = this.courseForm.value.name;
    const ects: number = this.courseForm.value.ects;
    const image: string = this.courseForm.value.image;
    const description: string = this.courseForm.value.description;
    const semester: number = this.courseForm.value.semester;
    const courseForm: string = this.courseForm.value.courseForm;
    const maxStudents: number = this.courseForm.value.maxStudents;
    if (!this.isEditing) this.courseService.addCourse(name, ects, image, description, semester, courseForm, maxStudents);
    else this.courseService.addCourseWID(this.currCourse.id, name, ects, image, description, semester, courseForm, maxStudents);
    this.route.navigate(['/courses']);

  }

  ngOnInit() {

    this.getCourses();
    this.initForm();
  }

}
