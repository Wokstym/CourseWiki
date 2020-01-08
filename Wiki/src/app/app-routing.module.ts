import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowCoursesComponent } from './course-list/show-courses/show-courses.component'
import { CourseDetailComponent } from './course-list/course-detail/course-detail.component'
import { AddCourseComponent } from './course-manipulation/add-course/add-course.component'
import { CourseManipulationComponent } from './course-manipulation/course-manipulation.component'
import { EditCourseComponent } from './course-manipulation/edit-course/edit-course.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent} from './auth/register/register.component'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';


const routes: Routes = [
  { path: 'courses', component: ShowCoursesComponent },
  { path: 'course/:id', component: CourseDetailComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  {
    path: 'refactor', component: CourseManipulationComponent, children: [
      { path: 'editCourse', component: EditCourseComponent, pathMatch: 'full' },
      { path: 'editCourse/:id', component: AddCourseComponent },
      { path: 'addCourse', component: AddCourseComponent },
    ]
  },
  { path: 'login', component:LoginComponent, },
  {path: 'register', component: RegisterComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }